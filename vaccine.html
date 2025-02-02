<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vaccine Status | KinderCare</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
        }

        .container {
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
            max-width: 1200px;
            margin: 20px auto;
            position: relative;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.3s ease;
        }

        .back-button:hover {
            background-color: #0056b3;
        }

        .vaccine-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        .vaccine-table th, .vaccine-table td {
            border: 1px solid #ddd;
            text-align: center;
            padding: 10px;
        }

        .vaccine-table th {
            background-color: #007BFF;
            color: white;
        }

        .vaccine-table tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .vaccine-table tr:hover {
            background-color: #f1f1f1;
        }

        .action-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .action-buttons button {
            padding: 8px 12px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .action-buttons .edit {
            background-color: #ffc107;
            color: white;
        }

        .action-buttons .edit:hover {
            background-color: #e0a800;
        }

        .action-buttons .complete {
            background-color: #28a745;
            color: white;
        }

        .action-buttons .complete:hover {
            background-color: #218838;
        }

        .action-buttons .delete {
            background-color: #dc3545;
            color: white;
        }

        .action-buttons .delete:hover {
            background-color: #c82333;
        }

        .add-vaccine {
            text-align: center;
            margin: 20px 0;
        }

        .add-vaccine button {
            background-color: #007BFF;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .add-vaccine button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Back to Dashboard Button -->
        <a href="dashboard.php" class="back-button">← Back to Dashboard</a>

        <h1>Vaccine Status</h1>

        <!-- Vaccine Table -->
        <table class="vaccine-table">
            <thead>
                <tr>
                    <th>Child Name</th>
                    <th>Vaccine</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="vaccineTableBody">
                <!-- Dynamic rows will be added here -->
            </tbody>
        </table>

        <!-- Add Vaccine Button -->
        <div class="add-vaccine">
            <button onclick="addVaccine()">+ Add Vaccine</button>
        </div>
    </div>

    <script>
        const vaccineData = [
            { name: "Abuya Skibidi", vaccine: "Hepatitis B", date: "2024-01-01", status: "Completed" },
            { name: "Ayoh pin", vaccine: "Covid 19", date: "2024-03-15", status: "Pending" },
        ];

        function loadVaccineData() {
            const tableBody = document.getElementById("vaccineTableBody");
            tableBody.innerHTML = "";

            vaccineData.forEach((entry, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${entry.name}</td>
                    <td>${entry.vaccine}</td>
                    <td>${entry.date}</td>
                    <td>${entry.status}</td>
                    <td class="action-buttons">
                        <button class="edit" onclick="editVaccine(${index})">Edit</button>
                        <button class="complete" onclick="completeVaccine(${index})">Mark as Complete</button>
                        <button class="delete" onclick="deleteVaccine(${index})">Delete</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        }

        function addVaccine() {
            const name = prompt("Enter child's name:");
            const vaccine = prompt("Enter vaccine name:");
            const date = prompt("Enter date (YYYY-MM-DD):");
            const status = "Pending";

            if (name && vaccine && date) {
                vaccineData.push({ name, vaccine, date, status });
                loadVaccineData();
            } else {
                alert("All fields are required!");
            }
        }

        function editVaccine(index) {
            const entry = vaccineData[index];

            const name = prompt("Edit child's name:", entry.name);
            const vaccine = prompt("Edit vaccine name:", entry.vaccine);
            const date = prompt("Edit date (YYYY-MM-DD):", entry.date);

            if (name && vaccine && date) {
                vaccineData[index] = { ...entry, name, vaccine, date };
                loadVaccineData();
            } else {
                alert("All fields are required!");
            }
        }

        function completeVaccine(index) {
            vaccineData[index].status = "Completed";
            loadVaccineData();
        }

        function deleteVaccine(index) {
            const confirmation = confirm("Are you sure you want to delete this record?");
            if (confirmation) {
                vaccineData.splice(index, 1);
                loadVaccineData();
            }
        }

        // Initialize table with data
        loadVaccineData();
    </script>
</body>
</html>
