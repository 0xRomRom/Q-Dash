"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

const signupEmailInput = document.querySelector(".user-email-signup");
const signupPasswordInput = document.querySelector(".user-password-signup");

const loginButton = document.querySelector(".login-button");
const goToSignupButton = document.querySelector(".goto-signup-button");
const signupBackButton = document.querySelector(".signup-back");
const loginModal = document.querySelector(".login-modal");
const signupModal = document.querySelector(".signup-modal");
const signupButton = document.querySelector(".signup-button");
const invalidCredentialsTxt = document.querySelector(".invalid-text");
const qdashLogo = document.querySelector(".qdash-home-logo");

// User login
const loginEmailPassword = async () => {
  const emailTxt = userEmailInput.value;
  const passwordTxt = userPasswordInput.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailTxt,
      passwordTxt
    );
    window.location.href = "http://localhost:1234/";
    console.log(userCredential.user);
    console.log(userCredential.token);
  } catch (err) {
    e.preventDefault();
    console.log(err);
  }
};

loginButton.addEventListener("click", (e) => {
  loginEmailPassword();
  e.preventDefault();
});

// Open signup modal
goToSignupButton.addEventListener("click", () => {
  loginModal.classList.add("hidden");
  signupModal.classList.remove("hidden");
});

// Back to login modal
signupBackButton.addEventListener("click", () => {
  loginModal.classList.remove("hidden");
  signupModal.classList.add("hidden");
});

//Create account
const createAccount = async () => {
  try {
    invalidCredentialsTxt.classList.add("hidden");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      signupEmailInput.value,
      signupPasswordInput.value
    );
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
    signupModal.classList.add("hidden");
    window.location.href = "http://localhost:1234/";
    console.log(userCredential.user.email);
  } catch (err) {
    invalidCredentialsTxt.classList.remove("hidden");
    console.log(err);
  }
};
signupButton.addEventListener("click", (e) => {
  createAccount();
  e.preventDefault();
});

// Back to home page
qdashLogo.addEventListener("click", () => {
  window.location.href = "http://localhost:1234/";
});
