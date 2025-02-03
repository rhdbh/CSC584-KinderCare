// Import Firestore functions
import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Reference to the "children" collection
const childrenCollection = collection(db, "children");

// Function to fetch and display children data
async function fetchChildren() {
    try {
        const querySnapshot = await getDocs(childrenCollection);
        const tableBody = document.getElementById("childrenTable");
        tableBody.innerHTML = ""; // Clear existing table data

        if (querySnapshot.empty) {
            tableBody.innerHTML = `<tr><td colspan="5">No child found.</td></tr>`;
            return;
        }

        querySnapshot.forEach((doc) => {
            const child = doc.data();
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${child.ChildName}</td>
                <td>${child.DateOfBirth}</td>
                <td>${calculateAge(child.DateOfBirth)}</td>
                <td>${child.Gender}</td>
                <td>
                    <button class="edit-button" onclick="editChild('${doc.id}')">✏️ Edit</button>
                    <button class="delete-button" onclick="deleteChild('${doc.id}')">🗑️ Delete</button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching children data:", error);
    }
}

// Function to calculate age from birth date
function calculateAge(birthDate) {
    const dob = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

// Call function to load children data on page load
fetchChildren();
