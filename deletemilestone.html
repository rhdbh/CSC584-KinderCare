<?php
$servername = "localhost";
$username = "root";
$password = "";  
$dbname = "kindercare";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if childID is set
if (isset($_GET['childID']) && is_numeric($_GET['childID'])) {
    $childID = $_GET['childID'];

    // Retrieve child's name
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

    // Retrieve milestones
    $sqlMilestones = "SELECT MilestoneID, MilestoneType, Date, Remark FROM milestone WHERE ChildID = ? ORDER BY Date DESC";
    $stmtMilestones = $conn->prepare($sqlMilestones);
    $stmtMilestones->bind_param('i', $childID);
    $stmtMilestones->execute();
    $resultMilestones = $stmtMilestones->get_result();
} else {
    echo "No child selected.";
    exit();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Milestones | KinderCare</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .button {
            padding: 5px 10px;
            margin: 5px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
        }
        .edit-button {
            background-color: blue;
            color: white;
        }
        .delete-button {
            background-color: red;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Milestones for <?php echo htmlspecialchars($childName); ?></h1>

        <?php if ($resultMilestones->num_rows > 0): ?>
            <table border="1">
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

    <?php
    // Close database connection
    $stmtMilestones->close();
    $conn->close();
    ?>
</body>
</html>
