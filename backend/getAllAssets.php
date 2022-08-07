<?php
require 'conn.php';


//Family
$familytab=[];
$role = 'Head';
$sql = "SELECT * FROM `Family`";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $familytab[$cr]['FamilyID']=$row['FamilyID'];
        $familytab[$cr]['FamilyName']=$row['FamilyName'];
        $cr++;
    }
    // echo json_encode($tab);
}
else
{
    http_response_code(404);
}

//Project
$projecttab=[];
$sql = "SELECT * FROM `Projects`";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $projecttab[$cr]['ProjectID']=$row['ProjectID'];
        $projecttab[$cr]['ProjectName']=$row['ProjectName'];
        $projecttab[$cr]['Valuation']=$row['Valuation'];
        $cr++;
    }
    // echo json_encode($tab);
}
else
{
    http_response_code(404);
}

//Users
$usertab=[];
$sql = "SELECT * FROM `Users`";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $usertab[$cr]['UserID']=$row['UserID'];
        $usertab[$cr]['FullName']=$row['FullName'];
        $usertab[$cr]['UserEmail']=$row['UserEmail'];
        $cr++;
    }
}
else
{
    http_response_code(404);
}
// project owneership
$potab=[];
$sql = "SELECT O.ProjectID, P.ProjectName , O.UserID, P.Valuation FROM ProjectOwnership O, Projects P where O.ProjectID = P.ProjectID"
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $potab[$cr]['ProjectID']=$row['ProjectID'];
        $potab[$cr]['ProjectName']=$row['ProjectName'];
        $potab[$cr]['UserID']=$row['UserID'];
        $potab[$cr]['Valuation']=$row['Valuation'];
        $cr++;
    }
}
else
{
    http_response_code(404);
}

$obj = (object) [
    'Family' => $familytab,
    'Projects' => $projecttab,
    'Users' => $usertab,
    'ProjectOwnership' => $potab
];

echo json_encode($obj);

?>