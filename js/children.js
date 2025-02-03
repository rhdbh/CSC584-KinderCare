// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Firebase configuration (Replace with your Firebase config)
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

// Function to calculate age from Date of Birth
function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Function to fetch and display children
const loadChildren = async (userId) => {
    const childrenTable = document.getElementById("childrenTable");
    childrenTable.innerHTML = "<tr><td colspan='4'>Loading...</td></tr>";

    try {
        const childrenQuery = query(collection(db, "children"), where("ParentID", "==", userId));
        const querySnapshot = await getDocs(childrenQuery);

        if (querySnapshot.empty) {
            childrenTable.innerHTML = "<tr><td colspan='4'>No child found.</td></tr>";
            return;
        }

        let html = "";
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const age = calculateAge(data.DateOfBirth);
            html += `
                <tr>
                    <td>${data.ChildName}</td>
                    <td>${new Date(data.DateOfBirth).toLocaleDateString()}</td>
                    <td>${age} years</td>
                    <td>${data.Gender}</td>
                </tr>
            `;
        });

        childrenTable.innerHTML = html;
    } catch (error) {
        console.error("Error fetching children:", error);
        childrenTable.innerHTML = "<tr><td colspan='4'>Error loading data.</td></tr>";
    }
};

// Listen for authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        loadChildren(user.uid);
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

