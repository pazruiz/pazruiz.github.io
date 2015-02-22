<?php
//Array con los nombre de los alumnos
$alumnos = array("Juan Pedro Adamuz Canales",
				 "Daniel Cabrera Cebrero",
				 "Luis Guirao Carmona",
				 "Alejandro Gutierrez Lozano",
				 "Daniel Gutierrez Lozano",
				 "Antonio León Alcaide",
				 "Christopher Muñoz Godenir",
				 "Paz Ruiz García",
				 "Pablo Sanchez Sanvicente"
			);

// obtener el parámetro q de la URL
$q = $_REQUEST["q"];

$sugerencia = "";

// Ver todas las sugerencias del array si $q no está vacio 
if ($q !== "") {
    $q = strtolower($q);
    $longitud=strlen($q);
    foreach($alumnos as $nombre) {
        if (stristr($q, substr($nombre, 0, $longitud))) {
            if ($sugerencia === "") {
                $sugerencia = $nombre;
            } else {
                $sugerencia .= ", $nombre";
            }
        }
    }
}

// Si no se encuentran sugerencias sugerencias mostramos un mensaje 
echo $sugerencia === "" ? "No hay sugerencias" : $sugerencia;