// =============================================
// SocialPro – Supabase Authentication
// =============================================
//
// SETUP (one-time):
//   1. Go to https://supabase.com and create a free project.
//   2. In your project dashboard → Settings → API, copy:
//      - "Project URL"  → paste as SUPABASE_URL below
//      - "anon public"  → paste as SUPABASE_ANON_KEY below
//   3. In Authentication → Providers, enable "Email" (on by default).
//      To enable Google login: enable the Google provider and add your
//      OAuth client ID & secret from Google Cloud Console.
//
// =============================================

const SUPABASE_URL      = 'https://jetdghnyfrhxdstojnbx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldGRnaG55ZnJoeGRzdG9qbmJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MDQ1ODYsImV4cCI6MjA4OTM4MDU4Nn0.cnf-K_oPTc_9Y9Rlrha5dnKe4yZnuHgyc_XNPjQRnOw';

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// =============================================
// Navbar UI — logged-in vs logged-out state
// =============================================

function updateNavUI(session) {
  const actions = document.getElementById('navActions');
  if (!actions) return;

  if (session) {
    const user  = session.user;
    const name  = user.user_metadata?.full_name || user.email.split('@')[0];
    const initials = name.trim().split(/\s+/).map(n => n[0]).join('').toUpperCase().slice(0, 2);
    actions.innerHTML = `
      <div class="user-chip">
        <div class="user-initials">${initials}</div>
        <span class="user-chip-name">${name}</span>
      </div>
      <button class="btn-ghost" onclick="handleSignOut()">Sign Out</button>
    `;
  } else {
    actions.innerHTML = `
      <button class="btn-ghost" onclick="openModal('loginModal')">Sign In</button>
      <button class="btn-primary" onclick="openModal('signupModal')">Get Started</button>
    `;
  }
}

// Listen for auth state changes (login, logout, page refresh)
sb.auth.onAuthStateChange((_event, session) => {
  updateNavUI(session);
});

// =============================================
// Sign Up
// =============================================

async function handleSignUp() {
  const name     = document.getElementById('signupName').value.trim();
  const email    = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const errEl    = document.getElementById('signupError');
  const btn      = document.getElementById('signupBtn');

  clearAuthError(errEl);

  if (!name || !email || !password) {
    return showAuthError(errEl, 'Please fill in all fields.');
  }
  if (password.length < 8) {
    return showAuthError(errEl, 'Password must be at least 8 characters.');
  }

  setLoading(btn, true);

  const { error } = await sb.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });

  setLoading(btn, false);

  if (error) {
    showAuthError(errEl, friendlyError(error.message));
  } else {
    closeModal('signupModal');
    clearSignupForm();
    showToast('Account created! Check your email to confirm your address.');
  }
}

// =============================================
// Sign In
// =============================================

async function handleSignIn() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginError');
  const btn      = document.getElementById('loginBtn');

  clearAuthError(errEl);

  if (!email || !password) {
    return showAuthError(errEl, 'Please enter your email and password.');
  }

  setLoading(btn, true);

  const { error } = await sb.auth.signInWithPassword({ email, password });

  setLoading(btn, false);

  if (error) {
    showAuthError(errEl, friendlyError(error.message));
  } else {
    closeModal('loginModal');
    clearLoginForm();
    showToast('Welcome back!');
  }
}

// =============================================
// Google OAuth
// =============================================

async function handleGoogleAuth() {
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });
  if (error) showToast('Google sign-in failed: ' + error.message, 'error');
}

// =============================================
// Sign Out
// =============================================

async function handleSignOut() {
  await sb.auth.signOut();
  showToast('You have been signed out.');
}

// =============================================
// Forgot Password
// =============================================

async function handleForgotPassword() {
  const email = document.getElementById('loginEmail').value.trim();
  const errEl = document.getElementById('loginError');

  clearAuthError(errEl);

  if (!email) {
    return showAuthError(errEl, 'Enter your email address above first.');
  }

  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + '?reset=true',
  });

  if (error) {
    showAuthError(errEl, friendlyError(error.message));
  } else {
    showToast('Password reset email sent! Check your inbox.');
  }
}

// =============================================
// Helpers
// =============================================

function showAuthError(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
}

function clearAuthError(el) {
  el.textContent = '';
  el.style.display = 'none';
}

function setLoading(btn, loading) {
  btn.disabled = loading;
  btn.textContent = loading ? 'Please wait…' : btn.dataset.label;
}

function clearSignupForm() {
  ['signupName', 'signupEmail', 'signupPassword'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  clearAuthError(document.getElementById('signupError'));
}

function clearLoginForm() {
  ['loginEmail', 'loginPassword'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  clearAuthError(document.getElementById('loginError'));
}

function friendlyError(msg) {
  if (!msg) return 'Something went wrong. Please try again.';
  if (msg.includes('Invalid login credentials'))  return 'Incorrect email or password.';
  if (msg.includes('Email not confirmed'))         return 'Please confirm your email before signing in.';
  if (msg.includes('User already registered'))     return 'An account with this email already exists.';
  if (msg.includes('Password should be'))          return 'Password must be at least 8 characters.';
  if (msg.includes('Unable to validate'))          return 'Invalid email address.';
  return msg;
}

function showToast(msg, type) {
  const t = document.createElement('div');
  t.className = 'toast' + (type === 'error' ? ' toast-error' : '');
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => t.classList.add('toast-visible'));
  });
  setTimeout(() => {
    t.classList.remove('toast-visible');
    setTimeout(() => t.remove(), 400);
  }, 4500);
}
