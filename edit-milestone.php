<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kindercare";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['milestoneID']) && isset($_GET['childID'])) {
    $milestoneID = $_GET['milestoneID'];
    $childID = $_GET['childID'];
    $sql = "SELECT * FROM milestone WHERE MilestoneID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $milestoneID);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $milestone = $result->fetch_assoc();
    } else {
        echo "Milestone not found.";
        exit();
    }
    $childSql = "SELECT ChildName FROM child WHERE ChildID = ?";
    $childStmt = $conn->prepare($childSql);
    $childStmt->bind_param('i', $childID);
    $childStmt->execute();
    $childResult = $childStmt->get_result();

    if ($childResult->num_rows > 0) {
        $childData = $childResult->fetch_assoc();
        $childName = $childData['ChildName'];
    } else {
        echo "Child not found.";
        exit();
    }

    $stmt->close();
    $childStmt->close();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $milestoneType = $_POST['milestoneType'];
        $date = $_POST['date'];
        $remark = $_POST['remark'];

        $updateSql = "UPDATE milestone SET MilestoneType = ?, Date = ?, Remark = ? WHERE MilestoneID = ?";
        $stmtUpdate = $conn->prepare($updateSql);
        $stmtUpdate->bind_param('sssi', $milestoneType, $date, $remark, $milestoneID);

        if ($stmtUpdate->execute()) {
            echo "<script>alert('Milestone updated successfully!'); window.location.href = 'view-milestone.php?childID=$childID';</script>";
        } else {
            echo "Error: " . $conn->error;
        }
        $stmtUpdate->close();
    }
} else {
    echo "Invalid request.";
    exit();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Milestone</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
        }
        input, select, textarea {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
        }
        button:hover {
            background-color: #0056b3;
        }
        .cancel-button {
            background-color: #dc3545; /* Red color */
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        .cancel-button:hover {
            background-color: #c82333; /* Darker red */
        }
        .form-container {
            max-width: 600px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Edit Milestone for<br><?php echo htmlspecialchars($childName); ?></h1>
        <form action="edit-milestone.php?milestoneID=<?php echo $milestoneID; ?>&childID=<?php echo $childID; ?>" method="POST">
            <label for="milestoneType">Milestone Type</label>
            <input type="text" name="milestoneType" value="<?php echo htmlspecialchars($milestone['MilestoneType']); ?>" required><br>

            <label for="date">Date</label>
            <input type="date" name="date" value="<?php echo htmlspecialchars($milestone['Date']); ?>" required><br>

            <label for="remark">Remark</label>
            <textarea name="remark" required><?php echo htmlspecialchars($milestone['Remark']); ?></textarea><br>

            <button type="submit">Update Milestone</button>
        </form>
        <br>
        <form action="milestone.php" method="get">
            <button type="submit" class="cancel-button">Cancel</button>
        </form>
    </div>
</body>
</html>
