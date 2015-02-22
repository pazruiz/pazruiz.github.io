<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>

    <?php
        $q = intval($_GET['q']);

        $conexion = mysqli_connect('localhost','root','','alumnos');
        if (!$conexion) {
            die('No se pudo conectar: ' . mysqli_error($conexion));
        }

        mysqli_select_db($conexion,"alumnos");
        $sql="SELECT * FROM alumnos WHERE id = '".$q."'";
        $result = mysqli_query($conexion,$sql);

        echo "<table class='table'>
                <tr>
                    <th>Nombre</th>
                    <th>Primer apellido</th>
                    <th>Segundo apellido</th>
                    <th>Curso</th>
                    <th>Edad</th>
                </tr>";
        while($fila = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $fila['nombre'] . "</td>";
            echo "<td>" . $fila['apellido1'] . "</td>";
            echo "<td>" . $fila['apellido2'] . "</td>";
            echo "<td>" . $fila['curso'] . "</td>";
            echo "<td>" . $fila['edad'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
        mysqli_close($conexion);
    ?>
</body>
</html>