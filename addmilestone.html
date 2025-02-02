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

// Validate childID
if (isset($_GET['childID']) && is_numeric($_GET['childID']) && $_GET['childID'] > 0) {
    $childID = $_GET['childID'];

    // Fetch child's name
    $sql = "SELECT ChildName FROM child WHERE ChildID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $childID);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $child = $result->fetch_assoc();
        $childName = $child['ChildName'];
    } else {
        echo "Child not found.";
        exit();
    }
    $stmt->close();
} else {
    echo "Invalid or missing ChildID.";
    exit();
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $milestoneType = $_POST['milestoneType'];
    $date = $_POST['date'];
    $remark = $_POST['remark'];

    echo "Debug: ChildID is " . $childID . "<br>";

    $sql = "INSERT INTO milestone (ChildID, MilestoneType, Date, Remark) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isss", $childID, $milestoneType, $date, $remark);

    if ($stmt->execute()) {
        echo "<script>alert('Milestone added successfully!'); window.location.href = 'milestone.php';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
    $stmt->close();
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Milestone | KinderCare</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Add Milestone for <?php echo htmlspecialchars($childName); ?></h1>

        <form action="add-milestone.php?childID=<?php echo $childID; ?>" method="POST">
            <div class="form-container">
                <label for="childName">Child Name</label>
                <input type="text" id="childName" name="childName" value="<?php echo htmlspecialchars($childName); ?>" disabled><br>

                <label for="milestoneType">Milestone Type</label>
                <select id="milestoneType" name="milestoneType" required>
                    <option value="">Select Milestone Type</option>
                    <option value="Social/Emotional">Social/Emotional</option>
                    <option value="Language/Communication">Language/Communication</option>
                    <option value="Cognitive">Cognitive</option>
                    <option value="Movement/Physical Development">Movement/Physical Development</option>
                </select><br>

                <label for="date">Date</label><br>
                <input type="date" id="date" name="date" required><br>

                <label for="remark">Remark</label><br>
                <textarea id="remark" name="remark" rows="4" placeholder="Enter any additional remarks"></textarea><br><br>

                <button type="submit">Add Milestone</button>
            </div>
        </form>
    </div>
</body>
</html>
