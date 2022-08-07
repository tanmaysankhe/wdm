<?php
require 'conn.php';

$recEmail=$_POST['email'];
$recPwd=$_POST['testpwd'];
$recName =$_POST['fullname'];
$recAncestor = $_POST['ancestor'];
$recRelation = $_POST['relation'];familyName;
$recfamilyName = $_POST['familyName'];
echo $recEmail;
echo $recPwd;
echo $recName;
echo $recAncestor;
echo $recRelation;
echo $recfamilyName;

echo "after echo";


$query="INSERT INTO `Users` (`FullName`, `UserEmail`, `Password`) VALUES ( '$recName', '$recEmail', '$recPwd')";

if(mysqli_query($conn,$query)){
 echo "Users updated successfully";
         $sql=$conn->query("SELECT * FROM `Users` ORDER BY 1 DESC LIMIT 1");
         $userrow=$sql->fetch_assoc();
         $userid=$userrow['UserID'];
         
         
         $query="INSERT INTO `Family` (`FamilyID`, `UserID`, `FamilyName`, `FamilyRole`) VALUES ( '$recAncestor', '$userid', '$recfamilyName', 'Member')";
      if(mysqli_query($conn,$query)){
         echo "Family updated sucessfully";
    }

}
else{
   echo "Something went wrong.";
}
