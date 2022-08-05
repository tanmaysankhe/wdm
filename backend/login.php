<?php
require 'conn.php';

$recEmail=$_POST['email'];
$recPwd=$_POST['pwd'];

$sql = "SELECT * FROM `registeredusers` WHERE `emailId`='{$recEmail}' AND `password`='{$recPwd}'";
if($result=mysqli_query($conn, $sql)){

if ($result->num_rows > 0) {
		$row = mysqli_fetch_assoc($result);
        $json=json_encode($row);

        echo $json;bv
	} else {
		echo "<script>alert('Woops! Email or Password is Wrong.')</script>";
	}
}

?>
