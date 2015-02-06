<?php
include("db-conexion.php");
$cp_request=$_REQUEST["cp"];

$consulta_db= $conexion->stmt_init();
$sql="select m.Municipio,p.Provincia from t_municipios as m, t_provincias as p where m.CodPostal= ? and m.CodProv=p.CodProv";
$consulta_db->prepare($sql);
$consulta_db->bind_param("s",$cp_request);
$consulta_db->execute();
$provincia="";
$localidades="";
while($resultado_db=$consulta_db->fetch()){
$provincia=$resultado_db['p.Provincia'];
$localidades.="<option id='".$resultado_db['m.Municipio']."'name='".$resultado_db['m.Municipio']."' value=>'".$resultado_db['m.Municipio']."'</option>";
}
echo $provincia;
echo $localidades;
 ?>