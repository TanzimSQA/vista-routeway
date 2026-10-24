/**
 * Vista Routeway - Authentication & Traveler Profile Engine
 * Client-Side Persistence with LocalStorage
 * Supports: Sign In, Registration, Forgot Password, Demo 1-Click Login,
 * Wishlist / Saved Packages, Inquiries Tracking, Profile Editing, and Bilingual i18n
 */

(function () {
  'use strict';

  // Storage Keys
  const USERS_KEY = 'vista_users';
  const SESSION_KEY = 'vista_session';

  // Default Pre-seeded Demo Traveler (VIP Gold Traveler)
  const DEMO_USER = {
    id: 'user_tanzim_demo',
    name: 'Tanzim Ahmed',
    email: 'tanzim@vistarouteway.com',
    phone: '+880 1912-345678',
    password: 'password123',
    role: 'VIP Traveler',
    tier: 'VIP Gold Traveler',
    city: 'Dhaka, Bangladesh',
    preference: 'luxury',
    savedTours: ['maldives-luxury', 'dubai-extravaganza', 'kashmir-paradise'],
    inquiries: [
      {
        id: 'inq_101',
        packageTitle: 'Maldives Luxury Overwater Villa & Lagoon Escape',
        destination: 'Maldives',
        travelers: 2,
        date: '2026-10-20',
        status: 'Consultant Assigned'
      },
      {
        id: 'inq_102',
        packageTitle: 'Dubai Extravaganza, Desert Safari & Abu Dhabi Grandeur',
        destination: 'Dubai',
        travelers: 2,
        date: '2026-10-14',
        status: 'Inquiry Received'
      }
    ],
    avatarInitial: 'TA',
    registeredAt: '2026-01-15T09:00:00.000Z'
  };

  // Safe localStorage helper
  function getStoredUsers() {
    try {
      const data = localStorage.getItem(USERS_KEY);
      if (!data) {
        const initial = [DEMO_USER];
        localStorage.setItem(USERS_KEY, JSON.stringify(initial));
        return initial;
      }
      const parsed = JSON.parse(data);
      // Ensure demo user exists in list
      if (!parsed.some(u => u.email.toLowerCase() === DEMO_USER.email.toLowerCase())) {
        parsed.unshift(DEMO_USER);
        localStorage.setItem(USERS_KEY, JSON.stringify(parsed));
      }
      return parsed;
    } catch (e) {
      console.error('Error reading vista_users:', e);
      return [DEMO_USER];
    }
  }

  function saveStoredUsers(users) {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Error saving vista_users:', e);
    }
  }

  function getSessionUser() {
    try {
      const data = localStorage.getItem(SESSION_KEY);
      if (!data) return null;
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }

  function setSessionUser(user) {
    try {
      if (user) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(SESSION_KEY);
      }
    } catch (e) {
      console.error('Error setting vista_session:', e);
    }
    updateUIForAuth();
  }

  // Helper to get initials
  function getInitials(name) {
    if (!name) return 'VR';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  // Update navbar, mobile controls, and drawer based on current auth state
  function updateUIForAuth() {
    const user = getSessionUser();

    // Desktop Navbar Elements
    const authLoginBtn = document.getElementById('auth-login-btn');
    const authUserDropdown = document.getElementById('auth-user-dropdown-wrap');
    const navUserAvatar = document.getElementById('nav-user-avatar');
    const navUserName = document.getElementById('nav-user-name');
    const menuUserAvatar = document.getElementById('menu-user-avatar');
    const dropdownFullName = document.getElementById('dropdown-user-fullname');
    const dropdownEmail = document.getElementById('dropdown-user-email');
    const dropdownTier = document.getElementById('dropdown-user-tier');
    const menuWishlistCount = document.getElementById('menu-wishlist-count');
    const menuInquiriesCount = document.getElementById('menu-inquiries-count');

    // Mobile Navbar Controls
    const mobileAuthGuestIcon = document.getElementById('mobile-auth-icon-guest');
    const mobileAuthAvatar = document.getElementById('mobile-auth-avatar-logged');

    // Mobile Drawer Elements
    const drawerLoggedOut = document.getElementById('drawer-auth-logged-out');
    const drawerLoggedIn = document.getElementById('drawer-auth-logged-in');
    const drawerAvatar = document.getElementById('drawer-user-avatar');
    const drawerName = document.getElementById('drawer-user-name');
    const drawerEmail = document.getElementById('drawer-user-email');

    if (user) {
      const initials = getInitials(user.name);
      const firstName = user.name.trim().split(/\s+/)[0];
      const wishlistLen = (user.savedTours || []).length;
      const inquiriesLen = (user.inquiries || []).length;

      // Desktop
      if (authLoginBtn) authLoginBtn.classList.add('hidden');
      if (authUserDropdown) authUserDropdown.classList.remove('hidden');
      if (navUserAvatar) navUserAvatar.textContent = initials;
      if (navUserName) navUserName.textContent = firstName;
      if (menuUserAvatar) menuUserAvatar.textContent = initials;
      if (dropdownFullName) dropdownFullName.textContent = user.name;
      if (dropdownEmail) dropdownEmail.textContent = user.email;
      if (dropdownTier) dropdownTier.innerHTML = `<span>★</span> ${user.tier || 'VIP Traveler'}`;
      if (menuWishlistCount) menuWishlistCount.textContent = wishlistLen;
      if (menuInquiriesCount) menuInquiriesCount.textContent = inquiriesLen;

      // Mobile Control
      if (mobileAuthGuestIcon) mobileAuthGuestIcon.classList.add('hidden');
      if (mobileAuthAvatar) {
        mobileAuthAvatar.classList.remove('hidden');
        mobileAuthAvatar.classList.add('flex');
        mobileAuthAvatar.textContent = initials;
      }

      // Mobile Drawer
      if (drawerLoggedOut) drawerLoggedOut.classList.add('hidden');
      if (drawerLoggedIn) {
        drawerLoggedIn.classList.remove('hidden');
        if (drawerAvatar) drawerAvatar.textContent = initials;
        if (drawerName) drawerName.textContent = user.name;
        if (drawerEmail) drawerEmail.textContent = user.email;
      }

      // Auto pre-fill contact forms if fields are empty
      const cName = document.getElementById('contact-name');
      const cPhone = document.getElementById('contact-phone');
      const cEmail = document.getElementById('contact-email');
      if (cName && !cName.value) cName.value = user.name;
      if (cPhone && !cPhone.value) cPhone.value = user.phone || '';
      if (cEmail && !cEmail.value) cEmail.value = user.email;

    } else {
      // Logged Out
      if (authLoginBtn) authLoginBtn.classList.remove('hidden');
      if (authUserDropdown) authUserDropdown.classList.add('hidden');

      if (mobileAuthGuestIcon) mobileAuthGuestIcon.classList.remove('hidden');
      if (mobileAuthAvatar) {
        mobileAuthAvatar.classList.add('hidden');
        mobileAuthAvatar.classList.remove('flex');
      }

      if (drawerLoggedOut) drawerLoggedOut.classList.remove('hidden');
      if (drawerLoggedIn) drawerLoggedIn.classList.add('hidden');
    }

    // Refresh wishlist badges on package cards
    updateWishlistCardIcons();
  }

  // Update heart icons on all rendered package cards
  function updateWishlistCardIcons() {
    const user = getSessionUser();
    const savedSet = new Set((user && user.savedTours) || []);

    document.querySelectorAll('.wishlist-btn').forEach(btn => {
      const tourId = btn.getAttribute('data-tour-id');
      if (!tourId) return;

      const isSaved = savedSet.has(tourId);
      const svg = btn.querySelector('svg');
      if (!svg) return;

      if (isSaved) {
        svg.setAttribute('fill', 'currentColor');
        svg.className = 'w-4 h-4 text-rose-500 fill-rose-500 transition-transform';
        btn.setAttribute('title', 'Remove from Wishlist');
      } else {
        svg.setAttribute('fill', 'none');
        svg.className = 'w-4 h-4 text-white fill-none transition-transform';
        btn.setAttribute('title', 'Save to Wishlist');
      }
    });
  }

  // Toggle user dropdown menu (Desktop)
  function toggleUserDropdown(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById('auth-user-menu');
    if (!menu) return;
    menu.classList.toggle('hidden');
  }

  function closeUserDropdown() {
    const menu = document.getElementById('auth-user-menu');
    if (menu) menu.classList.add('hidden');
  }

  // Mobile Auth Click Handler
  function handleMobileAuthClick() {
    const user = getSessionUser();
    if (user) {
      openProfileModal('profile');
    } else {
      openAuthModal('login');
    }
  }

  function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    if (menu) menu.classList.add('hidden');
    if (icon) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>`;
    }
  }

  // Modal Open/Close Controls
  function openAuthModal(initialTab = 'login', optionalAlert = null) {
    closeUserDropdown();
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    switchAuthTab(initialTab);

    const alertEl = document.getElementById('auth-alert');
    if (alertEl) {
      if (optionalAlert) {
        alertEl.textContent = optionalAlert;
        alertEl.className = 'p-3 rounded-xl mb-4 text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-2';
        alertEl.classList.remove('hidden');
      } else {
        alertEl.classList.add('hidden');
      }
    }
  }

  function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    const alertEl = document.getElementById('auth-alert');
    if (alertEl) alertEl.classList.add('hidden');
  }

  function showAuthAlert(message, type = 'error') {
    const alertEl = document.getElementById('auth-alert');
    if (!alertEl) return;

    alertEl.textContent = message;
    if (type === 'error') {
      alertEl.className = 'p-3 rounded-xl mb-4 text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-2 animate-in fade-in duration-200';
    } else if (type === 'success') {
      alertEl.className = 'p-3 rounded-xl mb-4 text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-2 animate-in fade-in duration-200';
    } else {
      alertEl.className = 'p-3 rounded-xl mb-4 text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-2 animate-in fade-in duration-200';
    }
    alertEl.classList.remove('hidden');
  }

  // Switch between Login, Register, and Forgot Password views in Auth Modal
  function switchAuthTab(tab) {
    const tabLogin = document.getElementById('tab-auth-login');
    const tabRegister = document.getElementById('tab-auth-register');
    const viewLogin = document.getElementById('view-auth-login');
    const viewRegister = document.getElementById('view-auth-register');
    const viewForgot = document.getElementById('view-auth-forgot');
    const demoBox = document.getElementById('auth-demo-box');
    const socialBox = document.getElementById('auth-social-box');
    const alertEl = document.getElementById('auth-alert');
    if (alertEl) alertEl.classList.add('hidden');

    if (tab === 'login') {
      if (tabLogin) {
        tabLogin.className = 'flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 text-white shadow-md transition-all';
      }
      if (tabRegister) {
        tabRegister.className = 'flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-all';
      }
      if (viewLogin) viewLogin.classList.remove('hidden');
      if (viewRegister) viewRegister.classList.add('hidden');
      if (viewForgot) viewForgot.classList.add('hidden');
      if (demoBox) demoBox.classList.remove('hidden');
      if (socialBox) socialBox.classList.remove('hidden');
    } else if (tab === 'register') {
      if (tabLogin) {
        tabLogin.className = 'flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-all';
      }
      if (tabRegister) {
        tabRegister.className = 'flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 text-white shadow-md transition-all';
      }
      if (viewLogin) viewLogin.classList.add('hidden');
      if (viewRegister) viewRegister.classList.remove('hidden');
      if (viewForgot) viewForgot.classList.add('hidden');
      if (demoBox) demoBox.classList.add('hidden');
      if (socialBox) socialBox.classList.remove('hidden');
    } else if (tab === 'forgot') {
      if (viewLogin) viewLogin.classList.add('hidden');
      if (viewRegister) viewRegister.classList.add('hidden');
      if (viewForgot) viewForgot.classList.remove('hidden');
      if (demoBox) demoBox.classList.add('hidden');
      if (socialBox) socialBox.classList.add('hidden');
    }
  }

  // Password visibility show/hide toggle
  function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPass = input.type === 'password';
    input.type = isPass ? 'text' : 'password';

    if (btnEl) {
      if (isPass) {
        btnEl.innerHTML = `<svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>`;
      } else {
        btnEl.innerHTML = `<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`;
      }
    }
  }

  // Live Password Strength Calculation
  function handlePasswordStrengthInput(e) {
    const val = e.target.value;
    const bar = document.getElementById('register-strength-bar');
    const label = document.getElementById('register-strength-label');
    if (!bar || !label) return;

    if (!val) {
      bar.style.width = '0%';
      bar.className = 'h-1.5 rounded-full strength-bar-fill bg-slate-600';
      label.textContent = '';
      return;
    }

    let score = 0;
    if (val.length >= 6) score++;
    if (val.length >= 9) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    if (score <= 2) {
      bar.style.width = '33%';
      bar.className = 'h-1.5 rounded-full strength-bar-fill bg-rose-500';
      label.textContent = 'Weak';
      label.className = 'text-[10px] text-rose-400 font-semibold';
    } else if (score <= 4) {
      bar.style.width = '66%';
      bar.className = 'h-1.5 rounded-full strength-bar-fill bg-amber-500';
      label.textContent = 'Medium';
      label.className = 'text-[10px] text-amber-400 font-semibold';
    } else {
      bar.style.width = '100%';
      bar.className = 'h-1.5 rounded-full strength-bar-fill bg-emerald-500';
      label.textContent = 'Strong';
      label.className = 'text-[10px] text-emerald-400 font-semibold';
    }
  }

  // Form Submission: Login
  function handleLoginSubmit(e) {
    e.preventDefault();
    const emailOrPhone = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!emailOrPhone || !password) {
      showAuthAlert('Please enter both email/phone and password.', 'error');
      return;
    }

    const users = getStoredUsers();
    const query = emailOrPhone.toLowerCase();
    const found = users.find(u => 
      (u.email && u.email.toLowerCase() === query) ||
      (u.phone && u.phone.replace(/\s+/g, '') === query.replace(/\s+/g, ''))
    );

    if (!found) {
      showAuthAlert('Account not found with this email or phone. Please register.', 'error');
      return;
    }

    if (found.password !== password) {
      showAuthAlert('Incorrect password. Please verify and try again.', 'error');
      return;
    }

    // Login successful
    setSessionUser(found);
    closeAuthModal();
    showToastNotification(`Welcome back, ${found.name}!`, 'Signed in successfully to Vista Routeway.');
  }

  // Form Submission: Register
  function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const phone = document.getElementById('register-phone').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPass = document.getElementById('register-confirm-password').value;
    const preference = document.getElementById('register-preference')?.value || 'luxury';
    const agreeTerms = document.getElementById('register-terms')?.checked;

    if (!name || name.length < 2) {
      showAuthAlert('Please enter your full name (at least 2 letters).', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAuthAlert('Please enter a valid email address.', 'error');
      return;
    }

    if (!phone || phone.replace(/\D/g, '').length < 7) {
      showAuthAlert('Please enter a valid phone number.', 'error');
      return;
    }

    if (!password || password.length < 6) {
      showAuthAlert('Password must be at least 6 characters long.', 'error');
      return;
    }

    if (password !== confirmPass) {
      showAuthAlert('Passwords do not match. Please re-check.', 'error');
      return;
    }

    if (!agreeTerms) {
      showAuthAlert('Please agree to the Vista Routeway Terms & Policy.', 'error');
      return;
    }

    // Check if email already registered
    const users = getStoredUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      showAuthAlert('An account with this email already exists. Please Sign In.', 'error');
      return;
    }

    // Create New User Object
    const newUser = {
      id: 'usr_' + Date.now(),
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: 'Traveler',
      tier: 'Silver Member',
      city: 'Dhaka, Bangladesh',
      preference: preference,
      savedTours: [],
      inquiries: [],
      avatarInitial: getInitials(name),
      registeredAt: new Date().toISOString()
    };

    users.push(newUser);
    saveStoredUsers(users);

    // Auto login
    setSessionUser(newUser);
    closeAuthModal();
    showToastNotification(`Welcome to Vista Routeway, ${name}!`, 'Your traveler account has been created successfully.');
  }

  // Form Submission: Forgot Password
  function handleForgotSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value.trim();
    if (!email) {
      showAuthAlert('Please enter your email address.', 'error');
      return;
    }

    const users = getStoredUsers();
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!found) {
      showAuthAlert('No account found with this email address.', 'error');
      return;
    }

    showAuthAlert(`Password reset link sent to ${email}! (Demo: your password is "${found.password}")`, 'success');
  }

  // Quick 1-Click Demo Login
  function quickDemoLogin() {
    const users = getStoredUsers();
    let demo = users.find(u => u.email.toLowerCase() === DEMO_USER.email.toLowerCase());
    if (!demo) {
      demo = DEMO_USER;
      users.unshift(demo);
      saveStoredUsers(users);
    }

    setSessionUser(demo);
    closeAuthModal();
    showToastNotification('Logged in as Tanzim Ahmed', 'VIP Gold Traveler demo account loaded.');
  }

  // Social Login Mock
  function socialLoginMock(provider) {
    const demoBtn = document.getElementById('auth-quick-demo-btn');
    const originalText = demoBtn ? demoBtn.innerHTML : '';
    if (demoBtn) demoBtn.textContent = `Connecting to ${provider}...`;

    setTimeout(() => {
      let user = getSessionUser();
      if (!user) {
        user = {
          id: 'usr_social_' + Date.now(),
          name: `${provider} Traveler`,
          email: `traveler@${provider.toLowerCase()}.com`,
          phone: '+880 1900-112233',
          password: 'socialPassword123',
          role: 'Verified Traveler',
          tier: 'Silver Member',
          city: 'Dhaka',
          preference: 'luxury',
          savedTours: ['maldives-luxury'],
          inquiries: [],
          avatarInitial: provider[0],
          registeredAt: new Date().toISOString()
        };
        const users = getStoredUsers();
        users.push(user);
        saveStoredUsers(users);
      }
      if (demoBtn && originalText) demoBtn.innerHTML = originalText;
      setSessionUser(user);
      closeAuthModal();
      showToastNotification(`Signed in with ${provider}!`, 'Welcome to Vista Routeway.');
    }, 500);
  }

  // Logout
  function logoutUser() {
    closeUserDropdown();
    closeProfileModal();
    setSessionUser(null);
    showToastNotification('Logged Out', 'You have been safely signed out from Vista Routeway.');
  }

  // Wishlist Toggle
  function toggleWishlist(e, tourId) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const user = getSessionUser();
    if (!user) {
      openAuthModal('login', 'Please sign in or register to save packages to your wishlist!');
      return;
    }

    if (!user.savedTours) user.savedTours = [];

    const index = user.savedTours.indexOf(tourId);
    let isAdded = false;

    if (index > -1) {
      user.savedTours.splice(index, 1);
      isAdded = false;
    } else {
      user.savedTours.push(tourId);
      isAdded = true;
    }

    // Update in users database
    const users = getStoredUsers();
    const userIdx = users.findIndex(u => u.id === user.id);
    if (userIdx > -1) {
      users[userIdx].savedTours = user.savedTours;
      saveStoredUsers(users);
    }

    // Update active session
    setSessionUser(user);

    // Visual heart pop animation
    if (e && e.currentTarget) {
      const btn = e.currentTarget;
      btn.classList.add('heart-popping');
      setTimeout(() => btn.classList.remove('heart-popping'), 400);
    }

    // Re-render profile wishlist if open
    renderProfileWishlist();

    // Show toast
    if (isAdded) {
      showToastNotification('Package Saved to Wishlist ❤️', 'You can view all saved tours in your Profile Dashboard.');
    } else {
      showToastNotification('Removed from Wishlist', 'Package removed from your saved list.');
    }
  }

  // Profile Modal & Tabs
  function openProfileModal(initialTab = 'profile') {
    closeUserDropdown();
    const user = getSessionUser();
    if (!user) {
      openAuthModal('login');
      return;
    }

    const modal = document.getElementById('profile-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    // Populate profile inputs
    const pName = document.getElementById('profile-edit-name');
    const pEmail = document.getElementById('profile-edit-email');
    const pPhone = document.getElementById('profile-edit-phone');
    const pCity = document.getElementById('profile-edit-city');
    const pStyle = document.getElementById('profile-edit-style');
    const pBadge = document.getElementById('profile-header-tier');
    const pAvatar = document.getElementById('profile-header-avatar');
    const pTitleName = document.getElementById('profile-header-fullname');
    const pSubEmail = document.getElementById('profile-header-email');
    const pSince = document.getElementById('profile-header-since');

    if (pName) pName.value = user.name || '';
    if (pEmail) pEmail.value = user.email || '';
    if (pPhone) pPhone.value = user.phone || '';
    if (pCity) pCity.value = user.city || 'Dhaka, Bangladesh';
    if (pStyle) pStyle.value = user.preference || 'luxury';
    if (pBadge) pBadge.textContent = user.tier || 'VIP Traveler';
    if (pAvatar) pAvatar.textContent = getInitials(user.name);
    if (pTitleName) pTitleName.textContent = user.name;
    if (pSubEmail) pSubEmail.textContent = user.email;
    if (pSince && user.registeredAt) {
      const year = new Date(user.registeredAt).getFullYear();
      pSince.textContent = `Member since ${year}`;
    }

    switchProfileTab(initialTab);
  }

  function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  function switchProfileTab(tab) {
    const tabs = ['profile', 'wishlist', 'inquiries', 'security'];
    tabs.forEach(t => {
      const btn = document.getElementById(`tab-btn-profile-${t}`);
      const view = document.getElementById(`prof-view-${t}`);
      if (btn) {
        if (t === tab) {
          btn.className = 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 text-white shadow-md transition-all flex items-center gap-1.5 shrink-0 cursor-pointer';
        } else {
          btn.className = 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer';
        }
      }
      if (view) {
        if (t === tab) {
          view.classList.remove('hidden');
        } else {
          view.classList.add('hidden');
        }
      }
    });

    if (tab === 'wishlist') {
      renderProfileWishlist();
    } else if (tab === 'inquiries') {
      renderProfileInquiries();
    }
  }

  // Render Saved Wishlist in Profile Modal
  function renderProfileWishlist() {
    const container = document.getElementById('profile-wishlist-grid');
    if (!container) return;

    const user = getSessionUser();
    const savedIds = (user && user.savedTours) || [];
    const toursData = window.TOURS_DATA || [];
    const currentLang = document.documentElement.lang || 'en';

    if (savedIds.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center">
          <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <h4 class="text-base font-bold text-slate-800 dark:text-white">${currentLang === 'bn' ? 'উইশলিস্টে কোনো প্যাকেজ নেই' : 'Your Wishlist is Empty'}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">${currentLang === 'bn' ? 'আমাদের আকর্ষণীয় ট্যুর প্যাকেজগুলো দেখুন এবং হার্ট আইকনে ক্লিক করে সংরক্ষণ করুন।' : 'Explore our signature tour packages and click the heart icon on any tour to save it for later.'}</p>
          <button onclick="closeProfileModal(); window.location.hash = '#packages';" class="mt-4 px-4 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold hover:bg-sky-500 transition cursor-pointer">${currentLang === 'bn' ? 'প্যাকেজগুলো দেখুন' : 'Explore Tour Packages'}</button>
        </div>
      `;
      return;
    }

    const savedTours = savedIds.map(id => toursData.find(t => t.id === id)).filter(Boolean);

    container.innerHTML = savedTours.map(tour => {
      const title = (currentLang === 'bn' && tour.title_bn) ? tour.title_bn : tour.title;
      const duration = (currentLang === 'bn' && tour.duration_bn) ? tour.duration_bn : tour.duration;
      const priceFormatted = tour.priceBdt ? tour.priceBdt.toLocaleString() : '';
      const waMsg = encodeURIComponent(`Hello Vista Routeway! I would like to book my saved wishlist package: ${tour.title} (৳${priceFormatted}).`);

      return `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 gap-3">
          <div class="flex items-center gap-3 w-full sm:w-auto min-w-0">
            <img src="${tour.featuredImage}" alt="${title}" class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 shadow-sm">
            <div class="min-w-0 flex-1">
              <div class="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">${duration}</div>
              <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate mt-0.5">${title}</h5>
              <div class="text-xs font-extrabold text-slate-800 dark:text-slate-100 mt-1">৳${priceFormatted} <span class="text-[10px] font-normal text-slate-400">($${tour.priceUsd})</span></div>
            </div>
          </div>
          <div class="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
            <a href="https://wa.me/8801900000000?text=${waMsg}" target="_blank" class="flex-1 sm:flex-none px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              <span>${currentLang === 'bn' ? 'বুকিং' : 'Book'}</span>
            </a>
            <button onclick="toggleWishlist(event, '${tour.id}')" class="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 text-xs font-bold transition cursor-pointer" title="Remove">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Inquiries in Profile Modal
  function renderProfileInquiries() {
    const container = document.getElementById('profile-inquiries-list');
    if (!container) return;

    const user = getSessionUser();
    const inquiries = (user && user.inquiries) || [];
    const currentLang = document.documentElement.lang || 'en';

    if (inquiries.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center">
          <div class="w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          </div>
          <h4 class="text-base font-bold text-slate-800 dark:text-white">${currentLang === 'bn' ? 'কোনো অনুসন্ধান পাওয়া যায়নি' : 'No Booking Inquiries Yet'}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">${currentLang === 'bn' ? 'ওয়েবসাইটে প্যাকেজ বুকিং বা অনুসন্ধান পাঠালে তা এখানে স্বয়ংক্রিয়ভাবে যুক্ত হবে।' : 'When you submit tour inquiries or customize a trip, your requests will appear here.'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = inquiries.map(inq => {
      let statusColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      if (inq.status.includes('Confirmed') || inq.status.includes('Assigned')) {
        statusColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      }

      return `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColor}">${inq.status}</span>
              <span class="text-[11px] text-slate-400">${inq.date}</span>
            </div>
            <h5 class="text-sm font-bold text-slate-900 dark:text-white">${inq.packageTitle}</h5>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Destination: <span class="text-slate-700 dark:text-slate-200 font-semibold">${inq.destination || 'International'}</span> • Travelers: <span class="text-slate-700 dark:text-slate-200 font-semibold">${inq.travelers || 2} Persons</span></div>
          </div>
          <a href="https://wa.me/8801900000000?text=${encodeURIComponent('Hello Vista Routeway! Follow up regarding my inquiry: ' + inq.packageTitle)}" target="_blank" class="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 text-xs font-bold border border-sky-500/30 transition">
            Follow Up
          </a>
        </div>
      `;
    }).join('');
  }

  // Profile Save
  function handleProfileSave(e) {
    e.preventDefault();
    const user = getSessionUser();
    if (!user) return;

    const name = document.getElementById('profile-edit-name')?.value.trim();
    const phone = document.getElementById('profile-edit-phone')?.value.trim();
    const city = document.getElementById('profile-edit-city')?.value.trim();
    const preference = document.getElementById('profile-edit-style')?.value;

    if (!name) {
      showToastNotification('Validation Error', 'Name cannot be empty.');
      return;
    }

    user.name = name;
    user.phone = phone;
    user.city = city;
    user.preference = preference;
    user.avatarInitial = getInitials(name);

    // Save to users database
    const users = getStoredUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx > -1) {
      users[idx] = user;
      saveStoredUsers(users);
    }

    setSessionUser(user);
    closeProfileModal();
    showToastNotification('Profile Updated!', 'Your traveler profile details have been saved.');
  }

  // Password Change
  function handlePasswordChange(e) {
    e.preventDefault();
    const user = getSessionUser();
    if (!user) return;

    const curr = document.getElementById('profile-curr-pass').value;
    const next = document.getElementById('profile-new-pass').value;
    const confirm = document.getElementById('profile-confirm-pass').value;

    if (user.password && user.password !== curr) {
      showToastNotification('Error', 'Current password does not match.');
      return;
    }

    if (next.length < 6) {
      showToastNotification('Error', 'New password must be at least 6 characters.');
      return;
    }

    if (next !== confirm) {
      showToastNotification('Error', 'New passwords do not match.');
      return;
    }

    user.password = next;
    const users = getStoredUsers();
    const idx = users.findIndex(u => u.id === user.id);
    if (idx > -1) {
      users[idx].password = next;
      saveStoredUsers(users);
    }

    setSessionUser(user);
    document.getElementById('profile-curr-pass').value = '';
    document.getElementById('profile-new-pass').value = '';
    document.getElementById('profile-confirm-pass').value = '';

    showToastNotification('Password Updated!', 'Your security credentials have been updated.');
  }

  // Universal Toast Notification
  function showToastNotification(title, message) {
    const toast = document.getElementById('notification-toast');
    if (!toast) return;

    const titleEl = toast.querySelector('[data-i18n="toast_title"]') || toast.querySelector('.font-bold');
    const descEl = toast.querySelector('[data-i18n="toast_desc"]') || toast.querySelector('.text-slate-300');

    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = message;

    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0');
    }, 4500);
  }

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('auth-user-dropdown-wrap');
    if (dropdown && !dropdown.contains(e.target)) {
      closeUserDropdown();
    }
  });

  // Close modals on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuthModal();
      closeProfileModal();
      closeUserDropdown();
    }
  });

  // Initialize Auth
  function initAuth() {
    getStoredUsers();
    updateUIForAuth();

    const regPass = document.getElementById('register-password');
    if (regPass) {
      regPass.addEventListener('input', handlePasswordStrengthInput);
    }

    const formLogin = document.getElementById('form-auth-login');
    if (formLogin) formLogin.addEventListener('submit', handleLoginSubmit);

    const formRegister = document.getElementById('form-auth-register');
    if (formRegister) formRegister.addEventListener('submit', handleRegisterSubmit);

    const formForgot = document.getElementById('form-auth-forgot');
    if (formForgot) formForgot.addEventListener('submit', handleForgotSubmit);

    const formProfEdit = document.getElementById('form-profile-edit');
    if (formProfEdit) formProfEdit.addEventListener('submit', handleProfileSave);

    const formProfPass = document.getElementById('form-profile-security');
    if (formProfPass) formProfPass.addEventListener('submit', handlePasswordChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
  } else {
    initAuth();
  }

  // Expose global methods
  window.VistaAuth = {
    getSessionUser,
    setSessionUser,
    updateUIForAuth,
    updateWishlistCardIcons
  };

  window.openAuthModal = openAuthModal;
  window.closeAuthModal = closeAuthModal;
  window.switchAuthTab = switchAuthTab;
  window.togglePasswordVisibility = togglePasswordVisibility;
  window.quickDemoLogin = quickDemoLogin;
  window.socialLoginMock = socialLoginMock;
  window.logoutUser = logoutUser;
  window.toggleWishlist = toggleWishlist;
  window.toggleUserDropdown = toggleUserDropdown;
  window.closeUserDropdown = closeUserDropdown;
  window.handleMobileAuthClick = handleMobileAuthClick;
  window.closeMobileMenu = closeMobileMenu;
  window.openProfileModal = openProfileModal;
  window.closeProfileModal = closeProfileModal;
  window.switchProfileTab = switchProfileTab;

})();
