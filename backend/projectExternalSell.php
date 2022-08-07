<?php

require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);



$recProjectID = $data['projectID'];
$recUserID = $data['userID'];
$recOwnPercent = $data['ownedPercent'];

echo $recProjectID;
echo $recOwnPercent;
echo $recUserID;


$query="DELETE FROM ProjectOwnership WHERE UserID = '$recUserID' and ProjectID = '$recProjectID'";
if(mysqli_query($conn,$query)){
      echo "ProjectOwnership updated successfully";
}
else{
   echo "ProjectOwnership update failed";
}

