"use strict";

import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

window.addEventListener("load", async () => {
  await monitorAuthState();
});

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

const logInButton = document.querySelector(".login-btn");
const logOutButton = document.querySelector(".logout-btn");

//Check if user is logged in
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      logInButton.classList.add("hidden");
      logOutButton.classList.remove("hidden");
      console.log(user.email);
    } else {
      logInButton.classList.remove("hidden");
      logOutButton.classList.add("hidden");
      console.log("No user");
    }
  });
};
monitorAuthState();
