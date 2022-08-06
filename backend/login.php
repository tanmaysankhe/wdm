<?php
require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);
echo $data;
print_r($data);


$recEmail = $data['email'];
$recPwd = $data['testpwd'];



echo $recEmail;
echo $recPwd;

$sql = "SELECT * FROM `Users` WHERE `UserEmail`='{$recEmail}' AND `Password`='{$recPwd}'";
if($result=mysqli_query($conn, $sql)){

if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $json=json_encode($row);
        echo $json;
	} else {
		echo "Something went wrong.";
	}
}
?>