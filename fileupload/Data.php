<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 3px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = $_GET['q'];
$con = mysqli_connect('localhost','root','');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"blur_data");
$sql="SELECT * FROM chart_js where id='".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Labels</th>
<th>Mlabels</th>
<th>Data</th>

</tr>";

while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['labels'] . "</td>";
    echo "<td>" . $row['mlabels'] . "</td>";
    echo "<td>" . $row['data'] . "</td>";
   
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>