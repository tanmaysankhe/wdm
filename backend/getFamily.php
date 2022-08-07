<?php
require 'conn.php';

$tab=[];
$role = 'Head';
$sql = "SELECT * FROM `Family` WHERE `FamilyRole`='$role'";

if($result=mysqli_query($conn,$sql))
{
$cr=0;
while($row=mysqli_fetch_assoc($result))
{
$tab[$cr]['FamilyID']=$row['FamilyID'];
$tab[$cr]['FamilyName']=$row['FamilyName'];
// $tab[$cr]['cname']=$row['cname'];
// $tab[$cr]['ccode']=$row['ccode'];
$cr++;
}
echo json_encode($tab);
}
else
{
http_response_code(404);
}
?>