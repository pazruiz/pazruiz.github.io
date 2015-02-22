-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-02-2015 a las 21:32:53
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `alumnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE IF NOT EXISTS `alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido1` varchar(255) NOT NULL,
  `apellido2` varchar(255) NOT NULL,
  `curso` varchar(255) NOT NULL,
  `edad` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido1`, `apellido2`, `curso`, `edad`) VALUES
(1, 'Juan Pedro', 'Adamuz', 'Canales', '2DAW', 20),
(2, 'Daniel', 'Cabrera', 'Cebrero', '2DAW', 21),
(3, 'Luis', 'Guirao', 'Carmona', '2DAW', 22),
(4, 'Alejandro', 'Gutierrez', 'Lozano', '2DAW', 21),
(5, 'Daniel', 'Gutierrez', 'Lozano', '2DAW', 23),
(6, 'Antonio', 'León', 'Alcaide', '2DAW', 28),
(7, 'Christopher', 'Muñoz', 'Godenir', '2DAW', 20),
(8, 'Paz', 'Ruiz', 'García', '2DAW', 41),
(9, 'Pablo', 'Sánchez', 'Sanvicente', '2DAW', 24);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
