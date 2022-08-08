<?php

require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);

$recGroupName = $data['groupName'];
$recFamilyID = $data['famlyID'];


echo $recGroupName;
echo $recFamilyID;


$query="INSERT INTO `FamilyGroup` (`GroupName`, `FamilyID`) VALUES ( '$recGroupName', '$recFamilyID')";

if(mysqli_query($conn,$query)){
 echo "Family group updated successfully";
}
else{
    echo "failed";    
}
