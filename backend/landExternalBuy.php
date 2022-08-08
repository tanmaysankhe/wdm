<?php

require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);


$recLandName = $data['landName'];
$recLandValue = $data['landValue'];
$recUserID = $data['userID'];
$recArea = $data['area'];

echo $recLandName;
echo $recLandValue;
echo $recUserID;
echo $recArea;


$query="INSERT INTO `Land` (`LandtName`, `Valuation`, `Area`) VALUES ( '$recLandName', '$recLandValue', '$recArea')";

if(mysqli_query($conn,$query)){
 echo "Land updated successfully";

      $sql=$conn->query("SELECT * FROM `Land` ORDER BY 1 DESC LIMIT 1");
      $userrow=$sql->fetch_assoc();
      $proejectid=$userrow['LandID'];
      $query="INSERT INTO `LandOwnership` (`LandID`, `UserID`, `PercentOwned`) VALUES ( '$proejectid', '$recUserID', 100)";
      if(mysqli_query($conn,$query)){
         echo "Land Ownership updated successfully";
    }
    else{
    //   http_response_code(401);
    }
}
else{
//   http_response_code(401);
}
