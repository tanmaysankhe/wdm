<?php
require 'conn.php';

$recEmail=$_POST['email'];
$recPwd=$_POST['testpwd'];

echo $recEmail;
echo $recPwd;

$sql = "SELECT * FROM `Users` WHERE `UserEmail`='{$recEmail}' AND `Password`='{$recPwd}'";
if($result=mysqli_query($conn, $sql)){

if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $json=json_encode($row);
        echo $json;
	} else {
		echo "<div>Something went wrong.</div>";
	}
}
?>