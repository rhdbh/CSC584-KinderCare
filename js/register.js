import { auth, users } from "./firebase.js";  // Make sure db is imported correctly
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
        window.location.href = "login.html";  // Redirect to login page after registration
    } catch (error) {
        // Handle registration errors
        if (error.code === 'auth/email-already-in-use') {
            errorMessage.textContent = "This email is already in use. Please try logging in or use a different email.";
        } else {
            errorMessage.textContent = error.message;
        }
        errorMessage.style.display = "block";  // Display error message
    }
});
