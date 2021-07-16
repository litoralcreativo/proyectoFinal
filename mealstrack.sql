-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2021 a las 20:24:01
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mealstrack`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_producto`, `id_usuario`, `cantidad`, `eliminado`, `ts_create`, `ts_update`) VALUES
(10, 15, 2, 350, 1, '2021-07-15 17:48:20', '2021-07-16 09:54:51'),
(11, 1, 2, 450, 1, '2021-07-15 17:59:33', '2021-07-16 09:54:51'),
(12, 8, 2, 450, 1, '2021-07-15 17:59:45', '2021-07-16 09:54:51'),
(13, 18, 2, 1500, 1, '2021-07-15 18:02:23', '2021-07-16 09:54:51'),
(14, 3, 2, 1000, 1, '2021-07-15 18:13:10', '2021-07-16 09:54:51'),
(15, 18, 2, 350, 1, '2021-07-16 09:47:52', '2021-07-16 09:54:51'),
(16, 7, 2, 550, 1, '2021-07-16 09:54:42', '2021-07-16 09:54:51'),
(17, 15, 2, 300, 1, '2021-07-16 15:00:27', '2021-07-16 15:00:47'),
(18, 2, 2, 350, 1, '2021-07-16 15:02:13', '2021-07-16 15:02:30'),
(19, 17, 2, 650, 1, '2021-07-16 15:03:22', '2021-07-16 15:03:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_parte` int(11) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `calorias` int(11) NOT NULL,
  `carbs` double NOT NULL,
  `fats` double NOT NULL,
  `proteins` double NOT NULL,
  `stock` double NOT NULL,
  `precio` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`, `id_categoria`, `id_parte`, `id_estado`, `eliminado`, `calorias`, `carbs`, `fats`, `proteins`, `stock`, `precio`) VALUES
(1, 'Amaranto', 3, 1, 1, 0, 384, 63.6, 7.6, 15.3, 9550, 520),
(2, 'Arroz', 3, 5, 1, 0, 339, 79.2, 0.2, 6.9, 29650, 110),
(3, 'Arroz', 3, 5, 2, 0, 82, 19.4, 0.1, 79, 4000, 120),
(4, 'Avena', 3, 5, 2, 0, 86, 15.8, 1.9, 3.8, 5000, 220),
(5, 'Avena', 3, 5, 1, 0, 383, 62.5, 7.8, 15.6, 15000, 198),
(6, 'Acelga', 1, 2, 1, 0, 8, 3.5, 0.1, 1.2, 20000, 125),
(7, 'Acelga', 1, 3, 1, 0, 15, 4.3, 0.2, 2.9, 19450, 105),
(8, 'Achicoria', 1, 3, 1, 0, 21, 2.9, 0.3, 1.6, 14550, 135),
(9, 'Achira', 1, 6, 1, 0, 34, 7.9, 0.2, 1.7, 10000, 245),
(10, 'Ajo', 1, 7, 1, 0, 99, 20, 0.2, 4.4, 7000, 95.7),
(11, 'Alcaucil', 1, 8, 1, 0, 63, 11.9, 0.4, 2.9, 5000, 295),
(12, 'Berenjena', 1, 4, 1, 0, 28, 5.5, 0.2, 1.1, 12000, 118.5),
(13, 'Cebolla blanca', 1, 7, 1, 0, 17, 3.5, 0, 0.8, 17000, 65.5),
(14, 'Tomate', 1, 4, 1, 0, 20, 4.1, 0, 1, 12000, 254.5),
(15, 'Anana', 2, 4, 1, 0, 34, 7.9, 0.2, 1.7, 4850, 159),
(16, 'Banana', 2, 4, 1, 0, 99, 20, 0.2, 4.4, 8000, 128.5),
(17, 'Cereza', 2, 4, 1, 0, 63, 11.9, 0.4, 2.9, 4350, 750),
(18, 'Ciruela', 2, 4, 1, 0, 105, 21.7, 0.8, 6, 5650, 230),
(19, 'Aceite', 5, 4, 1, 0, 862, 0, 100, 0, 5500, 2600),
(20, 'Aceite de girasol', 5, 1, 1, 0, 884, 0, 100, 0, 20000, 548);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes_categoria`
--

CREATE TABLE `ingredientes_categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes_categoria`
--

INSERT INTO `ingredientes_categoria` (`id`, `nombre`, `eliminado`) VALUES
(1, 'Vegetales', 0),
(2, 'Frutas', 0),
(3, 'Cereales', 0),
(4, 'Lacteos', 1),
(5, 'Grasas y Aceites', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes_estado`
--

CREATE TABLE `ingredientes_estado` (
  `id` int(11) NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes_estado`
--

INSERT INTO `ingredientes_estado` (`id`, `estado`) VALUES
(1, 'Crudo/a'),
(2, 'Hervido/a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes_imagen`
--

CREATE TABLE `ingredientes_imagen` (
  `id` int(11) NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_ingrediente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes_imagen`
--

INSERT INTO `ingredientes_imagen` (`id`, `uid`, `id_ingrediente`) VALUES
(1, '4a421b5a-0729-4474-ab4c-85dec27aed9e.jpeg', 1),
(2, 'ad09bf39-5303-4ea3-95e2-1bf3fdb9d8d8.jpeg', 2),
(3, 'a0d94fcb-0ed8-437b-881b-43babeb815af.jpeg', 3),
(4, '2d0b8805-5cb3-4f1c-abb7-b103c325ff4f.jpeg', 4),
(5, '00fd7518-da3c-47f4-b233-d28e020513ea.jpeg', 5),
(6, 'afb6d625-7a65-42e9-9aaf-905ad623d278.jpeg', 6),
(7, 'f05d50ae-bbba-4cab-b1dd-bba6f7c99747.jpeg', 7),
(8, '632c6fee-500c-40ef-8b8b-dfaf0b46aff7.jpeg', 8),
(9, 'b8b0e848-460c-4ff8-8599-e503526c376c.jpeg', 9),
(10, '60022eed-cc6e-4e26-b23d-fe42ffa54693.jpeg', 10),
(11, '8ec04acf-1c2e-4128-b652-1b9a8c6323de.jpeg', 11),
(12, '283c7723-dd7d-4908-98ff-5237d25b74a8.jpeg', 12),
(13, 'a46eabef-1e43-4012-99a9-bc51a296ad73.jpeg', 13),
(14, '6b51046a-5528-4bb2-9a21-36d2ae907a92.jpeg', 14),
(15, '96a79165-a20c-4379-86a1-4d3f3f0afc34.jpeg', 15),
(16, '92467638-1f91-461b-9d44-9e8602d03cb0.jpeg', 16),
(17, 'a66240c6-4ada-4fc0-880f-2f9b5146b7db.jpeg', 17),
(18, '18f6fbbf-8482-4840-a285-84f6d66313ec.jpeg', 18),
(19, '3386442b-3896-4ce6-81fb-6616e546f8ef.jpeg', 19),
(20, 'a79dcb04-b4a6-4746-aa8f-d57604a66a52.jpeg', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes_partes`
--

CREATE TABLE `ingredientes_partes` (
  `id` int(11) NOT NULL,
  `parte` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes_partes`
--

INSERT INTO `ingredientes_partes` (`id`, `parte`) VALUES
(1, 'Semilla'),
(2, 'Tallo'),
(3, 'Hoja'),
(4, 'Pulpa'),
(5, 'Grano'),
(6, 'Raiz'),
(7, 'Bulbo'),
(8, 'Inflorescencia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `confirmacionEmail` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `eliminado` tinyint(4) NOT NULL DEFAULT 0,
  `habilitado` tinyint(4) NOT NULL DEFAULT 0,
  `admin` tinyint(4) NOT NULL DEFAULT 0,
  `ts_create` datetime NOT NULL DEFAULT current_timestamp(),
  `ts_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `phone`, `username`, `pass`, `confirmacionEmail`, `eliminado`, `habilitado`, `admin`, `ts_create`, `ts_update`) VALUES
(1, 'Gaston', 'Chatelet', 'gastonattelet@gmail.com', '1164833745', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', '3766d854-c33f-43b7-800e-768323288092', 0, 1, 1, '2021-07-09 09:33:20', '2021-07-16 15:19:03'),
(2, 'Eloisa', 'Garcia', 'egarcianinos@gmail.com', '3435160389', 'ole1234', '421e7179807476e2ad369f6837cf036f057af814', '139ecc74-7726-4a78-9dee-08ac9daf8fa5', 0, 1, 0, '2021-07-13 09:48:09', '2021-07-16 15:19:38');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`,`id_usuario`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`,`id_parte`,`id_estado`),
  ADD KEY `id_parte` (`id_parte`),
  ADD KEY `id_estado` (`id_estado`);

--
-- Indices de la tabla `ingredientes_categoria`
--
ALTER TABLE `ingredientes_categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingredientes_estado`
--
ALTER TABLE `ingredientes_estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ingredientes_imagen`
--
ALTER TABLE `ingredientes_imagen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_ingrediente` (`id_ingrediente`);

--
-- Indices de la tabla `ingredientes_partes`
--
ALTER TABLE `ingredientes_partes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `ingredientes_categoria`
--
ALTER TABLE `ingredientes_categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ingredientes_estado`
--
ALTER TABLE `ingredientes_estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ingredientes_imagen`
--
ALTER TABLE `ingredientes_imagen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `ingredientes_partes`
--
ALTER TABLE `ingredientes_partes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `ingredientes` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD CONSTRAINT `ingredientes_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `ingredientes_categoria` (`id`),
  ADD CONSTRAINT `ingredientes_ibfk_2` FOREIGN KEY (`id_parte`) REFERENCES `ingredientes_partes` (`id`),
  ADD CONSTRAINT `ingredientes_ibfk_3` FOREIGN KEY (`id_estado`) REFERENCES `ingredientes_estado` (`id`);

--
-- Filtros para la tabla `ingredientes_imagen`
--
ALTER TABLE `ingredientes_imagen`
  ADD CONSTRAINT `ingredientes_imagen_ibfk_1` FOREIGN KEY (`id_ingrediente`) REFERENCES `ingredientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
