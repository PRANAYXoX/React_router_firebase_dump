import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBrvbwdY3lrWecJ-c2Ypw9VQYJ_9RvQlJI",
  authDomain: "prac1-948c6.firebaseapp.com",
  projectId: "prac1-948c6",
  storageBucket: "prac1-948c6.appspot.com",
  messagingSenderId: "64330796851",
  appId: "1:64330796851:web:3d219966bb2995bf113846",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
