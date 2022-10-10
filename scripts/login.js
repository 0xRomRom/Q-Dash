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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

const userEmailInput = document.querySelector(".user-email");

const userPasswordInput = document.querySelector(".user-password");

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
  if (userPasswordInput.value.length > 10) {
    userPasswordInput.style.borderBottomColor = "green";
  } else {
    userPasswordInput.style.borderBottomColor = "white";
  }
};

setInterval(() => {
  inputValidator();
}, 500);
