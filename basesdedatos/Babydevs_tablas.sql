CREATE DATABASE babydevs;
USE babydevs;

CREATE TABLE `asesores` (
  `idasesores` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `habilidad_principal` varchar(45) NOT NULL,
  `habilidades_secundarias` varchar(100) NOT NULL,
  `tarifa_por_asesoria` decimal(10,0) NOT NULL,
  `fecha_de_inicio` date NOT NULL,
  PRIMARY KEY (`idasesores`)
);

CREATE TABLE `sueldos` (
  `idSueldos` int NOT NULL AUTO_INCREMENT,
  `monto_total` decimal(10,0) NOT NULL,
  `comision_BabyDevs` decimal(10,0) NOT NULL,
  `impuestos_e_IVA` decimal(10,0) NOT NULL,
  `Asesores_idasesores` int NOT NULL,
  PRIMARY KEY (`idSueldos`,`Asesores_idasesores`),
  KEY `fk_Sueldos_Asesores1_idx` (`Asesores_idasesores`)
);

CREATE TABLE `historial_de_compras_has_sueldos` (
  `Historial_de_compras_idHistorial_de_compras` int NOT NULL,
  `Historial_de_compras_Asesorados_idAsesorados` int NOT NULL,
  `Sueldos_idSueldos` int NOT NULL,
  `Sueldos_Asesores_idasesores` int NOT NULL,
  PRIMARY KEY (`Historial_de_compras_idHistorial_de_compras`,`Historial_de_compras_Asesorados_idAsesorados`,`Sueldos_idSueldos`,`Sueldos_Asesores_idasesores`),
  KEY `fk_Historial de compras_has_Sueldos_Sueldos1_idx` (`Sueldos_idSueldos`,`Sueldos_Asesores_idasesores`),
  KEY `fk_Historial de compras_has_Sueldos_Historial de compras1_idx` (`Historial_de_compras_idHistorial_de_compras`,`Historial_de_compras_Asesorados_idAsesorados`)
);

CREATE TABLE `historial_de_compra_venta` (
  `idHistorial_de_compras` int NOT NULL AUTO_INCREMENT,
  `fecha_y_horario_de_compra` datetime NOT NULL,
  `metodo_de_pago` varchar(45) NOT NULL,
  `monto_total` decimal(10,0) NOT NULL,
  `Asesorados_idAsesorados` int NOT NULL,
  PRIMARY KEY (`idHistorial_de_compras`,`Asesorados_idAsesorados`),
  KEY `fk_Historial de compras_Asesorados_idx` (`Asesorados_idAsesorados`)
);

CREATE TABLE `horarios` (
  `idHorarios` int NOT NULL AUTO_INCREMENT,
  `matutino` varchar(45) NOT NULL,
  `vespertino` varchar(45) NOT NULL,
  `Asesores_idasesores` int NOT NULL,
  `Asesorados_idAsesorados` int NOT NULL,
  PRIMARY KEY (`idHorarios`,`Asesores_idasesores`,`Asesorados_idAsesorados`),
  KEY `fk_Horiarios_Asesores1_idx` (`Asesores_idasesores`),
  KEY `fk_Horiarios_Asesorados1_idx` (`Asesorados_idAsesorados`)
);

CREATE TABLE `asesorias_has_horarios` (
  `Asesorias_idAsesorias` int NOT NULL,
  `Asesorias_Asesorados_idAsesorados` int NOT NULL,
  `Asesorias_Asesores_idasesores` int NOT NULL,
  `Horarios_idHorarios` int NOT NULL,
  `Horarios_Asesores_idasesores` int NOT NULL,
  PRIMARY KEY (`Asesorias_idAsesorias`,`Asesorias_Asesorados_idAsesorados`,`Asesorias_Asesores_idasesores`,`Horarios_idHorarios`,`Horarios_Asesores_idasesores`),
  KEY `fk_Asesorías_has_Horiarios_Horiarios1_idx` (`Horarios_idHorarios`,`Horarios_Asesores_idasesores`),
  KEY `fk_Asesorías_has_Horiarios_Asesorías1_idx` (`Asesorias_idAsesorias`,`Asesorias_Asesorados_idAsesorados`,`Asesorias_Asesores_idasesores`)
);

CREATE TABLE `asesorias` (
  `idAsesorias` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `materia` varchar(45) NOT NULL,
  `duracion` varchar(45) NOT NULL,
  `Asesorados_idAsesorados` int NOT NULL,
  `Asesores_idasesores` int NOT NULL,
  PRIMARY KEY (`idAsesorias`,`Asesorados_idAsesorados`,`Asesores_idasesores`),
  KEY `fk_Asesorías_Asesorados1_idx` (`Asesorados_idAsesorados`),
  KEY `fk_Asesorías_Asesores1_idx` (`Asesores_idasesores`)
);

CREATE TABLE `asesorados` (
  `idAsesorados` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `edad` int NOT NULL,
  `nivel_de_estudios` varchar(45) NOT NULL,
  `ocupacion` varchar(45) NOT NULL,
  PRIMARY KEY (`idAsesorados`)
);

CREATE TABLE `experiencia` (
  `idExperiencia` int NOT NULL AUTO_INCREMENT,
  `tema` varchar(45) NOT NULL,
  `nivel_de_experiencia` varchar(45) NOT NULL,
  `breve_descripcion` varchar(300) NOT NULL,
  `Asesorados_idAsesorados` int NOT NULL,
  PRIMARY KEY (`idExperiencia`,`Asesorados_idAsesorados`),
  KEY `fk_Experiencia_Asesorados1_idx` (`Asesorados_idAsesorados`)
);

CREATE TABLE `localidad` (
  `idLocalidad` int NOT NULL AUTO_INCREMENT,
  `Estado` varchar(45) NOT NULL,
  `Ciudad` varchar(45) NOT NULL,
  PRIMARY KEY (`idLocalidad`)
);

CREATE TABLE `asesores_has_localidad` (
  `Asesores_idasesores` int NOT NULL,
  `Localidad_idLocalidad` int NOT NULL,
  PRIMARY KEY (`Asesores_idasesores`,`Localidad_idLocalidad`),
  KEY `fk_Asesores_has_Localidad_Localidad1_idx` (`Localidad_idLocalidad`),
  KEY `fk_Asesores_has_Localidad_Asesores1_idx` (`Asesores_idasesores`)
);

CREATE TABLE `localidad_has_asesorados` (
  `Localidad_idLocalidad` int NOT NULL,
  `Asesorados_idAsesorados` int NOT NULL,
  PRIMARY KEY (`Localidad_idLocalidad`,`Asesorados_idAsesorados`),
  KEY `fk_Localidad_has_Asesorados_Asesorados1_idx` (`Asesorados_idAsesorados`),
  KEY `fk_Localidad_has_Asesorados_Localidad1_idx` (`Localidad_idLocalidad`)
);