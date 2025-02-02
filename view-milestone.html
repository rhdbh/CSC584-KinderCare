<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kindercare";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['childID'])) {
    $childID = $_GET['childID'];
    $sqlChild = "SELECT ChildName FROM child WHERE ChildID = ?";
    $stmtChild = $conn->prepare($sqlChild);
    $stmtChild->bind_param('i', $childID);
    $stmtChild->execute();
    $resultChild = $stmtChild->get_result();
    $childName = '';
    if ($resultChild->num_rows > 0) {
        $child = $resultChild->fetch_assoc();
        $childName = $child['ChildName'];
    } else {
        echo "Child not found.";
        exit();
    }
    $stmtChild->close();
    $sqlMilestones = "SELECT MilestoneID, MilestoneType, Date, Remark FROM milestone WHERE ChildID = ? ORDER BY Date DESC";
    $stmtMilestones = $conn->prepare($sqlMilestones);
    $stmtMilestones->bind_param('i', $childID);
    $stmtMilestones->execute();
    $resultMilestones = $stmtMilestones->get_result();
} else {
    echo "No child selected.";
    exit();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Milestones | KinderCare</title>
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
        .edit-button {
            background-color: #28a745;
            margin-left: 10px;
        }
        .edit-button:hover {
            background-color: #218838;
        }
        .delete-button {
            background-color: #dc3545;
            margin-left: 10px;
        }
        .delete-button:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Milestones for <?php echo htmlspecialchars($childName); ?></h1>

        <?php if ($resultMilestones->num_rows > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>Milestone Type</th>
                        <th>Date</th>
                        <th>Remark</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while ($row = $resultMilestones->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($row['MilestoneType']); ?></td>
                            <td><?php echo htmlspecialchars($row['Date']); ?></td>
                            <td><?php echo htmlspecialchars($row['Remark']); ?></td>
                            <td>
                                <a href="edit-milestone.php?milestoneID=<?php echo $row['MilestoneID']; ?>&childID=<?php echo $childID; ?>" class="button edit-button">Edit</a>
                                <a href="delete-milestone.php?milestoneID=<?php echo $row['MilestoneID']; ?>&childID=<?php echo $childID; ?>" class="button delete-button" onclick="return confirm('Are you sure you want to delete this milestone?');">Delete</a>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>No milestones found for this child.</p>
        <?php endif; ?>

        <br>
        <a href="children.php">
            <button class="button">Back to Children List</button>
        </a>
    </div>
</body>
</html>
