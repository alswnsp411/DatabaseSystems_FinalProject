<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

//echo json_encode($_POST["email"]);

$sql = "SELECT id, email, password, name FROM CUSTOMER WHERE email='$_POST[email]'";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result);
$list_array = array("id" => $row['id'],
    "email" => $row['email'],
    "password" => $row['password'],
    "name" => $row['name']);

echo json_encode($list_array);
?>