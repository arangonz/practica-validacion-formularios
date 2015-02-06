<?php
include("db-conexion.php");
$cp_request=$_REQUEST["cp"];
$opcion_carga=$_REQUEST["opcionCarga"];

$consulta_db= $conexion->stmt_init();
$sql="select m.Municipio,p.Provincia from t_municipios as m, t_provincias as p where m.CodPostal= ? and m.CodProv=p.CodProv";
$consulta_db->prepare($sql);
$consulta_db->bind_param("s",$cp_request);
$consulta_db->execute();
$consulta_db->bind_result($resultado_db_localidad,$resultado_db_provincia);
$provincia="";
$localidades="";
while($consulta_db->fetch()){
$provincia=$resultado_db_localidad;
$localidades.="<option id='".$resultado_db_provincia."'name='".$resultado_db_provincia."' value=>".$resultado_db_provincia."</option>";
}

if($opcion_carga=="1"){
echo $provincia;

}
elseif($opcion_carga=="2") {
	echo $localidades;
}

 ?>