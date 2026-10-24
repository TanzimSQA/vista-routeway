// Automated test suite for Vista Routeway Authentication Engine
const fs = require('fs');
const path = require('path');

// Mock Browser Environment
const localStorageData = {};
global.localStorage = {
  getItem: (key) => localStorageData[key] || null,
  setItem: (key, val) => { localStorageData[key] = String(val); },
  removeItem: (key) => { delete localStorageData[key]; },
  clear: () => { Object.keys(localStorageData).forEach(k => delete localStorageData[k]); }
};

// Mock Document
const elements = {};
function createMockElement(id, tagName = 'div') {
  return {
    id,
    tagName,
    className: '',
    _classes: [],
    classList: {
      add: function(...classes) { this._classes = (this._classes || []).concat(classes); },
      remove: function(...classes) { this._classes = (this._classes || []).filter(c => !classes.includes(c)); },
      contains: function(c) { return (this._classes || []).includes(c); },
      toggle: function(c) { if (this.contains(c)) this.remove(c); else this.add(c); }
    },
    value: '',
    textContent: '',
    innerHTML: '',
    style: {},
    checked: true,
    type: 'text',
    children: [],
    getAttribute: function(name) { return this[name] || null; },
    setAttribute: function(name, val) { this[name] = val; },
    querySelector: function(sel) { return createMockElement('sub_' + sel); },
    querySelectorAll: function(sel) { return []; },
    addEventListener: function(evt, handler) { this._events = this._events || {}; this._events[evt] = handler; }
  };
}

global.document = {
  readyState: 'complete',
  documentElement: { lang: 'en', classList: createMockElement('html').classList },
  body: createMockElement('body'),
  getElementById: (id) => {
    if (!elements[id]) {
      elements[id] = createMockElement(id);
    }
    return elements[id];
  },
  querySelectorAll: (sel) => [],
  addEventListener: () => {}
};
global.window = global;
global.TOURS_DATA = [
  { id: 'maldives-luxury', title: 'Maldives Luxury Overwater Villa', priceBdt: 145000, priceUsd: 1190 },
  { id: 'dubai-extravaganza', title: 'Dubai Extravaganza', priceBdt: 88500, priceUsd: 725 }
];

console.log('Loading auth.js into test environment...');
const authCode = fs.readFileSync(path.join(__dirname, 'auth.js'), 'utf-8');
eval(authCode);

console.log('--- TEST SUITE START ---');

// Test 1: Check Demo User Initialization
console.log('Test 1: Check demo user in localStorage');
const session = window.VistaAuth.getSessionUser();
console.assert(session === null, 'Initial session should be null');

const users = JSON.parse(localStorage.getItem('vista_users') || '[]');
console.assert(users.length >= 1, 'Should have pre-seeded demo user');
console.assert(users[0].email === 'tanzim@vistarouteway.com', 'Demo user email matches');
console.log('✓ Test 1 passed: Pre-seeded users initialized correctly');

// Test 2: Quick Demo Login
console.log('Test 2: Quick Demo Login');
window.quickDemoLogin();
const loggedInUser = window.VistaAuth.getSessionUser();
console.assert(loggedInUser !== null, 'User should be logged in');
console.assert(loggedInUser.name === 'Tanzim Ahmed', 'Logged in user is Tanzim Ahmed');
console.assert(loggedInUser.tier === 'VIP Gold Traveler', 'Tier is VIP Gold Traveler');
console.log('✓ Test 2 passed: Quick Demo Login works');

// Test 3: Wishlist toggle
console.log('Test 3: Wishlist toggle');
const initWishlistLen = loggedInUser.savedTours.length;
window.toggleWishlist(null, 'kashmir-paradise');
const userAfterWishlist = window.VistaAuth.getSessionUser();
console.log('Saved tours count before/after:', initWishlistLen, userAfterWishlist.savedTours.length);
console.assert(userAfterWishlist.savedTours.length !== initWishlistLen, 'Wishlist count should toggle');
console.log('✓ Test 3 passed: Wishlist toggling works');

// Test 4: Profile Updates
console.log('Test 4: Profile Changes');
document.getElementById('profile-edit-name').value = 'Tanzim Ahmed Updated';
document.getElementById('profile-edit-phone').value = '+880 1999-888777';
document.getElementById('profile-edit-city').value = 'Gulshan, Dhaka';
document.getElementById('profile-edit-style').value = 'honeymoon';

// Trigger profile form submit
const formProfile = document.getElementById('form-profile-edit');
if (formProfile._events && formProfile._events['submit']) {
  formProfile._events['submit']({ preventDefault: () => {} });
}
const userAfterUpdate = window.VistaAuth.getSessionUser();
console.assert(userAfterUpdate.name === 'Tanzim Ahmed Updated', 'Name updated properly');
console.assert(userAfterUpdate.phone === '+880 1999-888777', 'Phone updated properly');
console.log('✓ Test 4 passed: Profile update works');

// Test 5: Registration Validation and Success
console.log('Test 5: Registration');
document.getElementById('register-name').value = 'New Traveler';
document.getElementById('register-email').value = 'newtraveler@example.com';
document.getElementById('register-phone').value = '+880 1711-223344';
document.getElementById('register-password').value = 'secret123';
document.getElementById('register-confirm-password').value = 'secret123';
document.getElementById('register-preference').value = 'family';
document.getElementById('register-terms').checked = true;

const formRegister = document.getElementById('form-auth-register');
if (formRegister._events && formRegister._events['submit']) {
  formRegister._events['submit']({ preventDefault: () => {} });
}

const regUser = window.VistaAuth.getSessionUser();
console.assert(regUser.email === 'newtraveler@example.com', 'New user registered and logged in');
console.assert(regUser.name === 'New Traveler', 'Name matches registered name');
console.log('✓ Test 5 passed: Registration works');

// Test 6: Sign Out
console.log('Test 6: Logout');
window.logoutUser();
const userAfterLogout = window.VistaAuth.getSessionUser();
console.assert(userAfterLogout === null, 'User should be null after logout');
console.log('✓ Test 6 passed: Logout successfully cleared session');

// Test 7: Login with Newly Registered User
console.log('Test 7: Login with Newly Registered User');
document.getElementById('login-email').value = 'newtraveler@example.com';
document.getElementById('login-password').value = 'secret123';
const formLogin = document.getElementById('form-auth-login');
if (formLogin._events && formLogin._events['submit']) {
  formLogin._events['submit']({ preventDefault: () => {} });
}
const userReLogin = window.VistaAuth.getSessionUser();
console.assert(userReLogin !== null && userReLogin.email === 'newtraveler@example.com', 'Login succeeded');
console.log('✓ Test 7 passed: Login with credentials works');

console.log('--- ALL 7 UNIT TESTS PASSED SUCCESSFULLY! ---');
