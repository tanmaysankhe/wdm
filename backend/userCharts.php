<?php
require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);

$recUserID = $data['userID'];

//Pro
$landtab=[];
$role = 'Head';
$sql = "SELECT P.ProjectID, P.Valuation, O.PercentOwned, P.ProjectName FROM ProjectOwnership O, Projects P, Users U where O.ProjectID = P.ProjectID and O.UserID = U.UserID and O.UserID = '$recUserID'";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $landtab[$cr]['ProjectID']=$row['ProjectID'];
        $landtab[$cr]['Valuation']=$row['Valuation'];
        $landtab[$cr]['PercentOwned']=$row['PercentOwned'];
        $landtab[$cr]['ProjectName']=$row['ProjectName'];
        $cr++;
    }
    // echo json_encode($tab);
}
else
{
    http_response_code(404);
}

//Project
// $projecttab=[];
// $sql = "SELECT * FROM `Projects`";
// if($result=mysqli_query($conn,$sql))
// {
//     $cr=0;
//     while($row=mysqli_fetch_assoc($result))
//     {
//         $projecttab[$cr]['ProjectID']=$row['ProjectID'];
//         $projecttab[$cr]['ProjectName']=$row['ProjectName'];
//         $projecttab[$cr]['Valuation']=$row['Valuation'];
//         $cr++;
//     }
//     // echo json_encode($tab);
// }
// else
// {
//     http_response_code(404);
// }

$obj = (object) [
    'ProjectChart' => $landtab,
];

echo json_encode($obj);

?>