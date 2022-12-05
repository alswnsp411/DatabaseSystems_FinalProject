<?php
$conn = mysqli_connect("192.168.3.3", "mjkim", "1234", "DBS_Project", "4567");

$sql = "SELECT product_id FROM BASKET_PRODUCT_RELATION WHERE (cust_id='$_POST[uid]' AND product_id='$_POST[pid]')";
$result = mysqli_query($conn, $sql);
$row = $result->fetch_assoc();

if ($row) {
//    장바구니에 같은 상품이 담겨져있던 경우
    $sql2 = "UPDATE BASKET_PRODUCT_RELATION SET my_count=my_count+1 WHERE(cust_id='$_POST[uid]' AND product_id='$_POST[pid]')";
    mysqli_query($conn, $sql2);
} else {
//    장바구니에 처음으로 담은 상품인 경우
    $sql3 = "INSERT INTO BASKET_PRODUCT_RELATION(cust_id, product_id) VALUES ('$_POST[uid]','$_POST[pid]')";
    mysqli_query($conn, $sql3);
}
//장바구니에 담은 총 상품 금액
$sql4 = "UPDATE SHOPPING_BASKET SET total_price=total_price+(SELECT price FROM PRODUCT WHERE id='$_POST[pid]') WHERE cust_id='$_POST[uid]'";
mysqli_query($conn, $sql4);

echo "1 record added";
mysqli_close($conn);
?>