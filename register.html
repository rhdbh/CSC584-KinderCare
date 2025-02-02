<?php
include('config.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userName = $_POST['username'];
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
            $success = "Registration successful!";
        } catch (Exception $e) {
            $error = "Error: " . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration | KinderCare</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Register | KinderCare</h1>
        <p>Please fill in the details below to create an account.</p>
        <form action="success.php" method="POST">
    <label for="userName">Full Name</label>
    <input type="text" name="userName" id="username" placeholder="Enter your full name" required>

    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Enter your email" required>

    <label for="password">Password</label>
    <input type="password" name="password" id="password" placeholder="Enter your password" required>

    <label for="phone">Phone Number</label>
    <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" required>

    <button type="submit">Register</button>
</form>
        <p>Already have an account? <a href="login.php">Login here</a>.</p>
    </div>

    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const errorMessage = document.getElementById('error-message');
            
            if (password !== confirmPassword) {
                event.preventDefault();
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });
    </script>
</body>
</html>
