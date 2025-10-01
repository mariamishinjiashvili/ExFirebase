// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93kGndvJF7ur2I9DueMpqlNhjOWzl-b8",
  authDomain: "myfrontendauth1.firebaseapp.com",
  projectId: "myfrontendauth1",
  storageBucket: "myfrontendauth1.firebasestorage.app",
  messagingSenderId: "568504315895",
  appId: "1:568504315895:web:1e7ddb91a27296d4e248f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-in handler
window.handleSignIn = async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, pass);
        document.getElementById("signinMessage").innerText = "✅ Sign-in successful!";

        // Switch to Welcome tab
        document.getElementById("SignIn").style.display = "none";
        document.getElementById("Welcome").style.display = "block";

    } catch (error) {
        document.getElementById("signinMessage").innerText = "❌ " + error.message;
        document.getElementById("signinMessage").style.color = "red";
    }
};
