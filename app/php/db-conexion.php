<?php

$usuario_db="root";
$contrasena_db="alumno";
$host_db="localhost";
$nombre_db="formulario";

$conexion = new mysqli($host_db,$usuario_db,$contrasena_db,$nombre_db);
//Hacemos una consulta a ver si el usuario existe
if ($conexion->connect_errno){
echo ("Se ha producido un error conectado a la base de datos ".$conexion->connect_error);
return null;
}

 ?>