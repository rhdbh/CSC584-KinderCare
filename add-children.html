<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "kindercare";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT UserID, UserName FROM user";
$result = $conn->query($sql);

$users = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Children | KinderCare</title>
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
            text-align: center;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
            text-align: center;
        }
        input[type="text"], input[type="date"], select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
            box-sizing: border-box;
            margin: 0 auto;
            display: block;
        }
        .radio-group {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 10px 0;
        }
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Add Child Details</h1>
        <form action="add_children.php" method="POST">
            <div class="form-group">
                <label for="userID">Parent's Name</label>
                <select id="userID" name="userID" required>
                    <option value="">Select a user</option>
                    <?php foreach ($users as $user): ?>
                        <option value="<?= $user['UserID']; ?>"><?= $user['UserName']; ?></option>
                    <?php endforeach; ?>
                </select>
            </div>

            <div class="form-group">
                <label for="childName">Child's Name</label>
                <input type="text" id="childName" name="childName" placeholder="Enter Child's Name" required>
            </div>

            <div class="form-group">
                <label for="dateOfBirth">Date of Birth</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" required>
            </div>

			<div class="form-group">
				<label for="gender">Gender</label>
				<select id="gender" name="gender" required>
				<option value="">Select Gender</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				</select>
			</div>
            <button type="submit" class="button">Add Child</button>
        </form>
    </div>
</body>
</html>
