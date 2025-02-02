// register.js
import { auth, User } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const errorMessage = document.getElementById("error-message");

    try {
        // Register user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;  // Firebase user object

        // Save user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            userName: userName,   // Full Name
            email: email,         // Email
            phoneNumber: phone    // Phone Number
        });

        alert("Registration successful!");
        window.location.href = "login.html";
    } catch (error) {
        // Handle registration errors
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
    }
});
