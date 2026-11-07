import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHS89nr8FhV9OIye5nOtavid0f-qs9bFI",
  authDomain: "english-academy-90e32.firebaseapp.com",
  projectId: "english-academy-90e32",
  storageBucket: "english-academy-90e32.firebasestorage.app",
  messagingSenderId: "197478932091",
  appId: "1:197478932091:web:7bc7cb90360c9db9d68cde",
  measurementId: "G-E50SR8R10J"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };