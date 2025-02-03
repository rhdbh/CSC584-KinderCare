// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYkRSxHjVrV9QYk45EDP5K2uHOoW-0pkk",
  authDomain: "kindercare-cd7da.firebaseapp.com",
  projectId: "kindercare-cd7da",
  storageBucket: "kindercare-cd7da.firebasestorage.app",
  messagingSenderId: "930908122510",
  appId: "1:930908122510:web:40f89ca7a5cf8dc3fb48df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Fetch Children Data
async function fetchChildren() {
    const childrenTable = document.getElementById("childrenTable");
    childrenTable.innerHTML = ""; // Clear table before populating

    const querySnapshot = await getDocs(collection(db, "children"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        childrenTable.innerHTML += `
            <tr>
                <td>${data.ChildName}</td>
                <td>${data.DateOfBirth}</td>
                <td>${data.Gender}</td>
                <td>
                    <button class='edit-button' onclick="editChild('${doc.id}')">Edit</button>
                    <button class='delete-button' onclick="deleteChild('${doc.id}')">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Add Child to Firestore
async function addChild() {
    const childName = document.getElementById("childName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    await addDoc(collection(db, "children"), {
        ChildName: childName,
        DateOfBirth: dob,
        Gender: gender,
        UserID: auth.currentUser.uid
    });

    alert("Child Added Successfully!");
    fetchChildren(); // Refresh table
}

// Delete Child from Firestore
async function deleteChild(childID) {
    if (confirm("Are you sure you want to delete this child?")) {
        await deleteDoc(doc(db, "children", childID));
        alert("Child Deleted!");
        fetchChildren(); // Refresh table
    }
}

// Load Data on Page Load
document.addEventListener("DOMContentLoaded", fetchChildren);
