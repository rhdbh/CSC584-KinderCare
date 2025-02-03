import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = { /* Your Firebase Config Here */ };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Add Child
document.getElementById("addChildForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const childName = document.getElementById("childName").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                await addDoc(collection(db, "children"), {
                    ChildName: childName,
                    DateOfBirth: new Date(dateOfBirth).toISOString(),
                    Gender: gender,
                    ParentID: user.uid
                });
                alert("Child added successfully!");
                window.location.href = "children.html";
            } catch (error) {
                console.error("Error adding child:", error);
            }
        }
    });
});
