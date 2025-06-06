import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIIZ9rFygABJ1xM6uWqWViIdkADukMVfc",
  authDomain: "fire-base-auth-react--112233.firebaseapp.com",
  databaseURL:
    "https://fire-base-auth-react--112233-default-rtdb.firebaseio.com",
  projectId: "fire-base-auth-react--112233",
  storageBucket: "fire-base-auth-react--112233.appspot.com",
  messagingSenderId: "747654008407",
  appId: "1:747654008407:web:67478a07c1ca4fb799dd12",
  measurementId: "G-D8WVKBYGRJ",
};

const app = initializeApp(firebaseConfig);

export { app };
