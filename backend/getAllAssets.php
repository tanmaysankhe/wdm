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
$sql = "SELECT O.ProjectID, P.ProjectName , O.UserID, P.Valuation, O.PercentOwned FROM ProjectOwnership O, Projects P where O.ProjectID = P.ProjectID";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $potab[$cr]['ProjectID']=$row['ProjectID'];
        $potab[$cr]['ProjectName']=$row['ProjectName'];
        $potab[$cr]['UserID']=$row['UserID'];
        $potab[$cr]['Valuation']=$row['Valuation'];
        $potab[$cr]['PercentOwned']=$row['PercentOwned'];

        $cr++;
    }
}
else
{
    http_response_code(404);
}


// land 
$landtab=[];
$sql = "SELECT * FROM `Land`";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $landtab[$cr]['LandID']=$row['LandID'];
        $landtab[$cr]['LandName']=$row['LandName'];
        $landtab[$cr]['Area']=$row['Area'];
        $landtab[$cr]['Valuation']=$row['Valuation'];
        $cr++;
    }
    // echo json_encode($tab);
}
else
{
    http_response_code(404);
}

// land owneership
$lotab=[];
$sql = "SELECT O.LandID, O.UserID, O.PercentOwned, L.LandName, L.Area, L.Valuation FROM LandOwnership O, Land L where O.LandID = L.LandID";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $lotab[$cr]['LandID']=$row['LandID'];
        $lotab[$cr]['UserID']=$row['UserID'];
        $lotab[$cr]['PercentOwned']=$row['PercentOwned'];
        $lotab[$cr]['LandName']=$row['LandName'];
        $lotab[$cr]['Area']=$row['Area'];

        $cr++;
    }
}
else
{
    http_response_code(404);
}

// trial
$ttab=[];
$sql = "SELECT * from Trails";
if($result=mysqli_query($conn,$sql))
{
    $cr=0;
    while($row=mysqli_fetch_assoc($result))
    {
        $ttab[$cr]['TrailID']=$row['TrailID'];
        $ttab[$cr]['AssetType']=$row['AssetType'];
        $ttab[$cr]['AssetID']=$row['AssetID'];
        $ttab[$cr]['Outcome']=$row['Outcome'];
        $ttab[$cr]['Fees']=$row['Fees'];

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
    'ProjectOwnership' => $potab,
    'Land' => $landtab,
    'LandOwnership' => $lotab,
    'Trial' => $ttab
];

echo json_encode($obj);

?>