<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kindercare";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT c.ChildID, c.ChildName, c.DateOfBirth, c.Gender, u.UserName FROM child c INNER JOIN user u ON c.UserID = u.UserID";
$result = $conn->query($sql);

if (isset($_GET['deleteID'])) {
    $deleteID = $_GET['deleteID'];
    $deleteSql = "DELETE FROM child WHERE ChildID = ?";
    
    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param('i', $deleteID);
    $stmt->execute();

    header("Location: children.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Children Dashboard | KinderCare</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .add-button {
            margin-bottom: 20px;
            display: inline-block;
        }
        .view-milestone-button {
            background-color: #28a745;
            margin-left: 10px;
        }
        .view-milestone-button:hover {
            background-color: #218838;
        }
        .add-milestone-button {
            background-color: 38c46f;
            margin-left: 10px;
        }
        .add-milestone-button:hover {
            background-color: #2258af;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>My Beloved Children</h1>    
        <table>
            <thead>
                <tr>
                    <th>Child Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>" . $row['ChildName'] . "</td>
                                <td>" . $row['DateOfBirth'] . "</td>
                                <td>" . $row['Gender'] . "</td>
                                <td>
                                    <a href='view-milestone.php?childID=" . $row['ChildID'] . "' class='button view-milestone-button'>View Milestone</a>
                                    <a href='add-milestone.php?childID=" . $row['ChildID'] . "' class='button add-milestone-button'>Add Milestone</a>
                                </td>
                              </tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>No children records found.</td></tr>";
                }
                ?>
            </tbody>
        </table><br>
        <a href="dashboard.php" class="add-button">
            <button class="button">Back to Dashboard</button>
        </a> 
    </div>
</body>
</html>

<?php
$conn->close();
?>
