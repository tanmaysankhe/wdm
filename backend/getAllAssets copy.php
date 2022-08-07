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

$obj = (object) [
    'Family' => $familytab,
    'Projects' => $projecttab
];

echo json_encode($obj);

?>