<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kindercare";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $childID = $_POST['childID'];
    $milestoneType = $_POST['milestoneType'];
    $date = $_POST['date'];
    $remark = $_POST['remark'];


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
