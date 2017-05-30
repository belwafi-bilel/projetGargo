<?php
$table_name = $_POST["table_name"];

$query = "SELECT * FROM ".$table_name;
$result = go_mysql($query);

$userinfo = array();
while ($row_user = $result->fetch_assoc())
    $userinfo[] = $row_user;


echo json_encode($userinfo);



function go_mysql($query)
{
    global $mysql_link; 


    if (!$mysql_link)
    {
       
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "blur_data";
        // Create connection
        $mysql_link = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($mysql_link->connect_error) {
            die("Connection failed: " . $mysql_link->connect_error);
        } 
    }
    $result = $mysql_link->query($query);
     return $result;
    

}

?>