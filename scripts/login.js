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
const invalidText = document.querySelector(".invalid-text");

const inputValidator = () => {
  let match = /["A-Z"]/;

  if (document.activeElement === userEmailInput) {
    for (let i = 0; i < 1; i++) {
      alert("Focused!");
    }
  }
  if (
    userEmailInput.value.includes("@") &&
    userEmailInput.value.includes(".") &&
    userEmailInput.value.length > 10
  ) {
    invalidText.textContent = "";
    userEmailInput.style.borderBottomColor = "green";
  } else {
    invalidText.textContent = "Please enter a valid Email Address";
    userEmailInput.style.borderBottomColor = "white";
  }
  if (
    userPasswordInput.value.length > 8 &&
    match.test(userPasswordInput.value)
  ) {
    invalidText.textContent = "";
    userPasswordInput.style.borderBottomColor = "green";
  } else {
    userPasswordInput.style.borderBottomColor = "white";
    invalidText.textContent = "Wrong Password";
  }
};

setInterval(() => {
  inputValidator();
}, 500);
