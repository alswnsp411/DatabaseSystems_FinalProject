<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

$sql = "DELETE FROM PRODUCT WHERE id='$_POST[id]'";

if(!mysqli_query($conn, $sql)){
    die('Error: ' .mysqli_error($conn));
}
echo "1 record deleted";
mysqli_close($conn);
?>