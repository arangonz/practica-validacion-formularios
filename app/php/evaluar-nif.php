<?php
include("db-conexion.php");
$nif_request=$_REQUEST["nifCif"];

$consulta_db= $conexion->stmt_init();
$sql="Select nif from usuarios where nif= ?";
$consulta_db->prepare($sql);
$consulta_db->bind_param("s",$nif_request);
$consulta_db->execute();
$nif_libre="true";
if($consulta_db->fetch()){
	$nif_libre= "false";
}
echo $nif_libre;
 ?>