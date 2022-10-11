"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjUBG1uVjtOrbC7dU2_yJD46tmCpDffNs",
  authDomain: "qdash-3fe95.firebaseapp.com",
  projectId: "qdash-3fe95",
  storageBucket: "qdash-3fe95.appspot.com",
  messagingSenderId: "741731808915",
  appId: "1:741731808915:web:8a5095c180e8509969ff66",
  measurementId: "G-YJYQ20T6BW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmailInput = document.querySelector(".user-email");
const userPasswordInput = document.querySelector(".user-password");

const loginButton = document.querySelector(".login-button");
const goToSignupButton = document.querySelector(".goto-signup-button");
const signupBackButton = document.querySelector('.signup-back')
const loginModal = document.querySelector(".login-modal");
const signupModal = document.querySelector(".signup-modal");

const inputValidator = () => {
  

  if (
    userEmailInput.value.includes("@") &&
    userEmailInput.value.includes(".") &&
    userEmailInput.value.length > 10
  ) {
    userEmailInput.style.borderBottomColor = "green";
  } else {
    userEmailInput.style.borderBottomColor = "white";
  }
  if (
    userPasswordInput.value.length >= 6 
  ) {
    userPasswordInput.style.borderBottomColor = "green";
  } else {
    userPasswordInput.style.borderBottomColor = "white";
  }
};

setInterval(() => {
  inputValidator();
}, 500);


// User login
loginButton.addEventListener('click', (e) => {
 
  e.preventDefault();
  // window.location.href = 'https://qdash.net/'
});


// Open signup modal
goToSignupButton.addEventListener('click', () => {
loginModal.classList.add('hidden');
signupModal.classList.remove('hidden');
});


// Back to login modal
signupBackButton.addEventListener('click', () => {
loginModal.classList.remove('hidden');
signupModal.classList.add('hidden');
});