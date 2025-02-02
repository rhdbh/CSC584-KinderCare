import { auth, db } from "./firebase.js"; 
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
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            userName,
            email,
            phone
        });

        alert("Registration successful!");
        window.location.href = "login.html";

    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
    }
});
