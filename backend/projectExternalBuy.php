<?php

require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);



$recProjectName = $data['projectName'];
$recProjectValue = $data['projectValue'];
$recUserID = $data['userID'];

echo $recProjectName;
echo $recProjectValue;
echo $recUserID;
echo "after echo";


$query="INSERT INTO `Projects` (`ProjectName`, `Valuation`) VALUES ( '$recProjectName', '$recProjectValue')";

if(mysqli_query($conn,$query)){
 echo "Projects updated successfully";

      $sql=$conn->query("SELECT * FROM `Projects` ORDER BY 1 DESC LIMIT 1");
      $userrow=$sql->fetch_assoc();
      $proejectid=$userrow['ProjectID'];
      $query="INSERT INTO `ProjectOwnership` (`ProjectID`, `UserID`, `PercentOwned`) VALUES ( '$proejectid', '$recUserID', 100)";
      if(mysqli_query($conn,$query)){
         echo "ProjectOwnership successfully";
    }
    else{
    //   http_response_code(401);
    }
}
else{
//   http_response_code(401);
}
