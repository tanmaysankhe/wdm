<?php

require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);

$recAssetType = $data['assetType'];
$recAssetID = $data['assetID'];
$recUserID = $data['userID'];
$recOutcome = $data['trialOutcome'];
$recOpID = $data['opID'];
$recFees = $data['fees'];

echo $recLandID;
echo $recUserID;
echo $recOutcome;
echo $recOpID;
echo $recFees;


$query="INSERT INTO `Trails` (`UserID`, `OppID` ,`AssetType`, `AssetID`,`Outcome`, `Fees`) VALUES ( '$recUserID', '$recOpID' , '$recAssetType', '$recAssetID' , '$recOutcome', '$recFees')";

if(mysqli_query($conn,$query)){
 echo "Trials updated successfully";


//       $query="INSERT INTO `LandOwnership` (`LandID`, `UserID`, `PercentOwned`) VALUES ( '$proejectid', '$recUserID', 100)";
//       if(mysqli_query($conn,$query)){
//          echo "Land Ownership updated successfully";
//          }

}
else{
//   http_response_code(401);
}
