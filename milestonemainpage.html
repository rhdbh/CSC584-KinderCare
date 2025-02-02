<?php
$servername = "localhost";
$username = "root";
$password = "";  
$dbname = "kindercare";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT c.ChildID, c.ChildName, c.DateOfBirth, c.Gender, u.UserName 
        FROM child c 
        INNER JOIN user u ON c.UserID = u.UserID";
$result = $conn->query($sql);

if (isset($_GET['deleteID']) && is_numeric($_GET['deleteID'])) {
    $deleteID = $_GET['deleteID'];
    $deleteSql = "DELETE FROM child WHERE ChildID = ?";

    $stmt = $conn->prepare($deleteSql);
    $stmt->bind_param('i', $deleteID);
    
    if ($stmt->execute()) {
        header("Location: children.php");
        exit();
    } else {
        echo "Error deleting record.";
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
     <title>Children Dashboard</title>
     <link rel="stylesheet" href="css/styles.css">
     <style>
         .button {
             padding: 5px 10px;
             margin: 5px;
             text-decoration: none;
             border-radius: 5px;
         }
         .delete-button {
             background-color: red;
             color: white;
         }
         .view-milestone-button {
             background-color: green;
             color: white;
         }
         .add-milestone-button {
             background-color: blue;
             color: white;
         }
         .add-button {
             display: block;
             margin-top: 20px;
             background-color: orange;
             padding: 10px;
             text-align: center;
             color: white;
             text-decoration: none;
             border-radius: 5px;
         }
     </style>
</head>
<body>
   <div class="container">
       <h1>My Beloved Children</h1>
       <table border="1">
           <thead>
               <tr>
                   <th>Child Name</th>
                   <th>Date Of Birth</th>
                   <th>Gender</th>
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               <?php
               $conn = new mysqli($servername, $username, $password, $dbname);
               if ($conn->connect_error) {
                   die("Connection failed: " . $conn->connect_error);
               }
               $result = $conn->query($sql);

               if ($result->num_rows > 0) {
                   while ($row = $result->fetch_assoc()) {
                       echo "<tr>
                               <td>" . htmlspecialchars($row['ChildName']) . "</td>
                               <td>" . htmlspecialchars($row['DateOfBirth']) . "</td>
                               <td>" . htmlspecialchars($row['Gender']) . "</td>
                               <td>
                                  <a href='view-milestone.php?childID=" . $row['ChildID'] . "' class='button view-milestone-button'>View Milestone</a>
                                  <a href='add-milestone.php?childID=" . $row['ChildID'] . "' class='button add-milestone-button'>Add Milestone</a>
                                  <a href='children.php?deleteID=" . $row['ChildID'] . "' class='button delete-button' onclick=\"return confirm('Are you sure you want to delete this child?');\">Delete</a>
                               </td>
                            </tr>";
                   }
               } else {
                   echo "<tr><td colspan='4'>No children records found.</td></tr>";
               }
               $conn->close();
               ?>
           </tbody>
       </table>
       <br>
       <a href="dashboard.php" class="add-button">Back to Dashboard</a>
   </div>
</body>
</html>
