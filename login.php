<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

//echo json_encode($_POST["email"]);

$sql = "SELECT email, password FROM CUSTOMER WHERE email='$_POST[email]'";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_array($result);
$list_array = array("email" => $row['email'],
    "password" => $row['password']);

echo json_encode($list_array);
?>