<?php
    $link = mysqli_connect("localhost","root","root123456","test") or die("無法開啟MySQL資料庫連結!<br>");

    mysqli_query($link,'SET CHARACTER SET utf8d');
    mysqli_query($link,"SET collation_connection = 'utf8_unicode_ci'");

    $keyword = $_GET['keyword'];
    $query = "SELECT * FROM product WHERE name LIKE '%".$keyword."%'";

    $product_name = [];
    $product_price = [];
    $product_stocks = [];
    $product_description = [];
    $product_pic = [];

    $result = $conection->query($query);
    while ($row = $result->fetch_assoc())
    {
        $product_name = $row['name'];
        $product_price = $row['price'];
        $product_stocks = $row['stock'];
        $product_description = $row['description'];
        $product_pic = $row['pic'];
    }

    $data = [
        'name' => $product_name,
        'price' => $product_price,
        'stocks' => $product_stocks,
        'description' => $product_description,
        'pic' => $product_pic
    ];
    echo json_encode($data);
    mysqli_close($link);
?>
