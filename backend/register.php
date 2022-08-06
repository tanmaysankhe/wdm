<?php
require 'conn.php';

$recEmail=$_POST['email'];
$recPwd=$_POST['testpwd'];
$recName =$_POST['fullname'];

echo $recEmail;
echo $recPwd;
echo $recName;

$query="INSERT INTO `Users` (`FullName`, `UserEmail`, `Password`) VALUES ( '$recName', '$recEmail', '$recPwd')";

if(mysqli_query($conn,$query)){
 echo "Data has been inserted successfully";
//  $sql=$conn->query("SELECT `rid` FROM `registeredusers` WHERE `emailId`='{$recEmail}' LIMIT 1");
//  $userrow=$sql->fetch_assoc();
//  $rid=$userrow['rid'];
//    if($userRole == 'student'){
//       $stuquery="INSERT INTO `student`(`sid`, `fistName`, `lastName`, `emailId`) VALUES ('$rid','$recFname','$recLname', '$recEmail')";
//       if(mysqli_query($conn,$stuquery)){
//          echo "Student record created";
//    }
}
else{
   echo "Something went wrong.";
}
