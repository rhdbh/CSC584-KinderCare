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
    $userID = $_POST['userID'];
    $childName = $_POST['childName'];
    $dateOfBirth = $_POST['dateOfBirth'];
    $gender = $_POST['gender'];

    $sql = "INSERT INTO child (UserID, ChildName, DateOfBirth, Gender) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isss", $userID, $childName, $dateOfBirth, $gender);

    if ($stmt->execute()) {
        echo "<script>alert('Child added successfully!'); window.location.href = 'children.php';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
    $stmt->close();
}

$conn->close();
?>
