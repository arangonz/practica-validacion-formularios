<?php
include("db-conexion.php");
$email_request=$_REQUEST["email"];

$consulta_db= $conexion->stmt_init();
$sql="Select email from usuarios where email= ?";
$consulta_db->prepare($sql);
$consulta_db->bind_param("s",$email_request);
$consulta_db->execute();
$email_libre="true";
if($consulta_db->fetch()){
	$email_libre= "false";
}
echo $email_libre;
 ?>