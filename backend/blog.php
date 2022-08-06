<?php
require 'conn.php';

$data = json_decode(file_get_contents('php://input'), true);
// echo $data;
// print_r($data);

$array = $data['allposts'];
// echo "<pre>";
// print_r($array);

// $sql="SELECT 'URL' from `BlogPost` WHERE `URL`='{$recEmail}'";
// $result=mysqli_query($conn, $sql);
// echo $result;


foreach ((array)$array as $v) {
   echo $v['blogname'];
   echo $v['url'];
   echo $v['blogid'];
   echo $v['author'];

   $blogname = $v['blogname'];
   $url = $v['url'];
   $blogid = $v['blogid'];
   $author =  $v['author'];




   $query="INSERT INTO `BlogPost` (`WordPressID`, `Author`, `URL`, `Title`) VALUES ('$blogid' , '$author', '$url','$blogname')";
   
   try {
   if(mysqli_query($conn,$query)){
      echo "\nData has been inserted successfully ";
      echo $url;
     }
     else{
        echo "\nSomething went wrong\n. ";
        echo $url;
     }
}

catch(Exception $e) {
  echo 'Message: ' .$e->getMessage();
}
   

   
}

echo " this is the end";
