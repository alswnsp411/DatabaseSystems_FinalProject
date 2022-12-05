<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

$sql = "SELECT * FROM BASKET_PRODUCT_RELATION LEFT JOIN PRODUCT ON PRODUCT.id= BASKET_PRODUCT_RELATION.product_id WHERE BASKET_PRODUCT_RELATION.cust_id='$_POST[uid]'";
$result = mysqli_query($conn, $sql);

$return_array = array();
while ($row = $result->fetch_assoc()) {
    $return_array[] = $row;
}
echo json_encode($return_array);
?>
