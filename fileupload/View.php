<!DOCTYPE html>
<html>
<head>


<!-- <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> -->
<script type="text/javascript">
function showUser(str) {
  if (str=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("txtHint").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","Data.php?q="+str,true);
  xmlhttp.send();
}

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// }


</script>
</head>
<body>
<!-- <h1>My Web Page</h1>
<div id="google_translate_element"></div> -->

<form>
<?php

$con = mysqli_connect('localhost','root','');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"blur_data");
$sql="SELECT * FROM chart_js";
$result = mysqli_query($con,$sql);
?>
<select name="users" onchange="showUser(this.value)">
<option value="">Select a person:</option>
<?php while($row = mysqli_fetch_array($result)) {?>
<option value="<?php echo $row[0] ?>"><?php echo $row[1]." ".$row[2] ?></option>
<?php } ?>
</select>
</form>
<br>
<div id="txtHint"><b>Person info will be listed here.</b></div>

</body>
</html>