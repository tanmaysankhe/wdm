<?php

require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);


$recProjectID = $data['projectID'];
$recUserID = $data['userID'];
$recClientID = $data['clientID'];
$recprjpercent = $data['prjpercent'];

echo $recProjectID;
echo $recprjpercent;
echo $recUserID;
echo $recClientID;


$query="UPDATE  ProjectOwnership SET PercentOwned = PercentOwned - '$recprjpercent'  WHERE UserID = '$recClientID' and ProjectID = '$recProjectID'";
if(mysqli_query($conn,$query)){
      echo "Seller updated successfully";
      
      $query="INSERT INTO `ProjectOwnership` (`ProjectID`, `UserID`, `PercentOwned`) VALUES ( '$recProjectID', '$recUserID', '$recprjpercent')";
      if(mysqli_query($conn,$query)){
            echo "Buyer updated";
      }
      else{
            echo "Buyer update fail";
      }
}
else{
    echo "ProjectOwnership update failed";
}

?>