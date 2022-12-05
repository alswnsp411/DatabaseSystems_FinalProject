<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

$sql = "SELECT * FROM PRODUCT WHERE category_name='$_POST[category]'";
$result = mysqli_query($conn, $sql);

$return_array=array();  //카테고리 data 저장 배열
while ($row = $result->fetch_assoc()) {
    $return_array[]=$row;
}
echo json_encode($return_array);
?>