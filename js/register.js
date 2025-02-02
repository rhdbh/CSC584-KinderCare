// register.js
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Menangani event submit
document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const errorMessage = document.getElementById("error-message");

    try {
        // Mendaftar pengguna dengan email dan password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;  // Objek pengguna Firebase

        // Menyimpan data pengguna dalam Firestore
        await setDoc(doc(db, "users", user.uid), {
            userName: userName,    // Nama penuh pengguna
            email: email,          // Emel pengguna
            phoneNumber: phone     // Nombor telefon pengguna
        });

        alert("Pendaftaran berjaya!");
        window.location.href = "login.html";  // Redirect ke halaman login selepas pendaftaran berjaya
    } catch (error) {
        // Menangani ralat pendaftaran
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
    }
});
