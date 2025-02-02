<?php
include('config.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];
    $phoneNumber = $_POST['phone'];

    if ($password !== $confirmPassword) {
        $error = "Password does not match!";
    } else {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO users (UserName, Email, Password, PhoneNumber) 
                VALUES (:username, :email, :password, :phone)";
        $stmt = $conn->prepare($sql);
       
        $stmt->bindParam(':username', $userName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':phone', $phoneNumber);
        
        try {
            $stmt->execute();
            header("Location: login.php"); // Redirect to login page after registration
            exit();
        } catch (Exception $e) {
            $error = "Error: " . $e->getMessage();
        }
    }
}
?>
