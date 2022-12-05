<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

$sql = "INSERT INTO CUSTOMER(email, password, name, phone_number, payment, address) 
    VALUE('$_POST[email]','$_POST[password]','$_POST[name]','$_POST[phoneNumber]','$_POST[payment]','$_POST[address]')";

if(!mysqli_query($conn, $sql)){
    die('Error: ' .mysqli_error($conn));
}

$sql2="INSERT INTO SHOPPING_BASKET(cust_id, total_price) VALUES((SELECT id FROM CUSTOMER cs WHERE cs.email='$_POST[email]'), 0)";
if(!mysqli_query($conn, $sql2)){
    die('Error: ' .mysqli_error($conn));
}

echo "1 record added";
mysqli_close($conn);
?>