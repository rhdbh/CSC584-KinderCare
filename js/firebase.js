import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyAYkRSxHjVrV9QYk45EDP5K2uHOoW-0pkk",
  authDomain: "kindercare-cd7da.firebaseapp.com",
  projectId: "kindercare-cd7da",
  storageBucket: "kindercare-cd7da.firebasestorage.app",
  messagingSenderId: "930908122510",
  appId: "1:930908122510:web:40f89ca7a5cf8dc3fb48df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
