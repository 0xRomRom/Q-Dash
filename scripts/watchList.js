"use strict";

const someButton = document.querySelector(".local-button");
const someInput = document.querySelector(".random-input");

someButton.addEventListener("click", () => {
  const getStorage = localStorage.getItem("loggedIn");
  if (!getStorage) {
    alert("No storage!");
  }
  if (getStorage.length > 1) {
  }
  console.log(getStorage);
  let hello = "hello";
  const sendData = fetch(
    `https://qdash-3fe95-default-rtdb.europe-west1.firebasedatabase.app/${getStorage}.json`,
    {
      method: "POST",
      body: JSON.stringify(someInput.value),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
});
