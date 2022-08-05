<?php
require 'conn.php';

$recFname =$_POST['fname'];
$recLname =$_POST['lname'];
$recEmail =$_POST['email'];
$recPwd =$_POST['pwd'];
$recCpwd =$_POST['cpwd'];
$userRole=$_POST['signupRole'];
echo $recFname;
echo $recLname;
echo $recEmail;
echo $recPwd;
echo $recCpwd;
$query="INSERT INTO `registeredusers` (`firstName`, `lastName`, `emailId`, `password`,`role`) VALUES ( '$recFname', '$recLname', '$recEmail', '$recPwd','$userRole')";

if(mysqli_query($conn,$query)){
 echo "Data has been inserted successfully";
 $sql=$conn->query("SELECT `rid` FROM `registeredusers` WHERE `emailId`='{$recEmail}' LIMIT 1");
 $userrow=$sql->fetch_assoc();
 $rid=$userrow['rid'];
   if($userRole == 'student'){
      $stuquery="INSERT INTO `student`(`sid`, `fistName`, `lastName`, `emailId`) VALUES ('$rid','$recFname','$recLname', '$recEmail')";
      if(mysqli_query($conn,$stuquery)){
         echo "Student record created";
   }
}
else{
   echo "Error!";
}
}