USE babydevs; 

INSERT INTO babydevs.asesores (nombre, descripcion, habilidad_principal, habilidades_secundarias, tarifa_por_asesoria, fecha_de_inicio)
VALUES ('Lizeth Bravo Acevedo', '¡Hola! Soy Lizeth, desarrolladora Java Full Stack con pasión por tecnología y gestión de proyectos. He perfeccionado la gestión de proyectos y desarrollo web en los últimos años. Me emociona compartir mis conocimientos en Git, HTML5 y CSS3.','HTML5', 'Git y CSS3', 150, '2023-12-18'),
('Ana Cristina Hernández', '¡Hola! Soy Ana Cristina Hernández, desarrolladora web con pasión por la tecnología. Mi experiencia en investigación me brinda habilidades avanzadas de análisis y comunicación. Espero con ansias poder trabajar contigo.', 'JavaScript', 'Bootstrap', 150, '2023-12-18'),
('Jessica L. Olivera', '¡Hola! Soy Jessica L. Olivera, una especialista en Java Full Stack con pasión por enseñar y perfeccionar habilidades técnicas y blandas en programación. Me apasiona aceptar desafíos y aprender constantemente. Y espero que pueda transmitirte todos mis conocimientos y energía.', 'JAVA', 'Trello y MySQL', 150, '2023-12-18'),
('Alma Graciela Martínez González', '¡Hola! Soy Alma, Desarrolladora Full Stack apasionada por la tecnología y el aprendizaje. He perfeccionado mis habilidades para transmitirlas de manera sencilla. Mi verdadera pasión es el conocimiento y compartirlo con otros.', 'CCS3', 'Metodología SCRUM', 150, '2023-12-18'),
('Amalia Elizalde', '¡Hola! Soy Amalia Elizalde, desarrolladora Java Full Stack apasionada por la programación. He perfeccionado mis habilidades en desarrollo web durante el último año. Más allá de los números y logros, mi pasión es aprender y mantenerme actualizada en TI.', 'JAVA', 'Trello y Bootstrap', 150, '2023-12-18'),
('Areli Moreno', '¡Hola! Soy Areli Moreno, desarrolladora web apasionada por las TI. He perfeccionado mis habilidades técnicas y blandas. Mi verdadera pasión es compartir conocimientos y ayudar a otros a alcanzar sus metas.', 'JavaScript', 'CSS3 y Figma', 150, '2023-12-18'),
('Abril Fernández', '¡Hola! Soy Abril, latinoamericanista y desarrolladora web apasionada por la enseñanza y el área TI. A lo largo de años, he perfeccionado la docencia y el desarrollo web. Mi pasión es compartir conocimiento y ayudarte a alcanzar tu éxito profesional.', 'HTML5', 'JAVA y Github', 150, '2023-12-18');


INSERT INTO babydevs.sueldos (idSueldos, monto_neto, comision_BabyDevs, impuestos_e_IVA, Asesores_idasesores)
VALUES (1, 90, 30, 30, 1),
(2, 180, 60, 60, 2),
(3, 450, 150, 150, 3),
(4, 150, 50, 50, 5),
(5, 540, 180, 180, 7);




INSERT INTO babydevs.historial_de_compras_has_sueldos (Historial_de_compras_idHistorial_de_compras, Historial_de_compras_Asesorados_idAsesorados, Sueldos_idSueldos, Sueldos_Asesores_idasesores) 
VALUES (1,1,1,1),(2,5,2,2),(3,3,3,3),(4,4,4,5),(5,2,5,7);


INSERT INTO babydevs.historial_de_compra_venta (fecha_y_horario_de_compra, metodo_de_pago, monto_total, Asesorados_idAsesorados) 
VALUES (1,'2023-12-23 09:05:17','Tarjeta de débito',150,1),
(2,'2024-01-10 12:10:00','Transferencia',300,5),
(3,'2024-02-15 15:43:37','Tarjeta de crédito',750,3),
(4,'2023-12-27 09:17:51','Tarjeta de débito',250,4),
(5,'2023-12-15 12:00:43','Transferencia',900,2);


INSERT INTO babydevs.horarios (matutino, vespertino, Asesores_idasesores, Asesorados_idAsesorados) 
VALUES (1,'11:00-12:00','',1,1),
(2,' ','17:00-18:00',2,5),
(3,'12:00-13:00',' ',3,3),
(4,' ','16:00-17:00',5,4),
(5,' ','19:00-20:00',7,2);


INSERT INTO babydevs.Asesorias_has_Horarios (Asesorias_idAsesorias, Asesorias_Asesorados_idAsesorados, Asesorias_Asesores_idasesores, Horarios_idHorarios, Horarios_Asesores_idasesores) 
VALUES (1,1,1,1,1),
(2,5,2,2,2),
(3,3,3,3,3),
(4,4,5,4,5),
(5,2,7,5,7);


INSERT INTO babydevs.Asesorias (idAsesorias, nombre, materia, duracion, Asesorados_idAsesorados, Asesores_idasesores) 
VALUES (1,'Lizeth Bravo Acevedo','HTML5','1 hora',1,1),
(2,'Ana Cristina Hernández','JavaScript','2 horas',5,2),
(3,'Jessica L. Olivera','Java','3 horas',3,3),
(4,'Amalia Elizalde','Trello','1 hora',4,5),
(5,'Abril Fernández','GitHub','2 horas',2,5);


INSERT INTO babydevs.Asesorados (nombre, edad, nivel_de_estudios, ocupacion) 
VALUES ('Pedro Díaz', 20, 'Licenciatura trunca', 'Estudiante');


INSERT INTO babydevs.experiencia (tema, nivel_de_experiencia, breve_descripcion, Asesorados_idAsesorados) 
VALUES (1,'HTML5','Básico','Estudié un curso introductorio de HTML5, tengo conocimientos básicos acerca de la estructura y estilos.',1),
(2,'JavaScript','Intermedio','Experiencia en HTML5, CSS y sólidos conocimientos en JavaScript',5),
(3,'Java','Básico - Intermedio','Sólidos conocimientos con difultades para desarrollar ideas',3),
(4,'Trello','Intermedio','Experiencia en la organización del trabajo y la división de tareas',4),
(5,'GitHub','Sin experiencia','Sin experiencia, pero con muchas ganas de aprender',2);


INSERT INTO babydevs.Localidad (Estado, Ciudad) 
VALUES (1,'Ciudad de México','Ciudad de México'),
(2,'Guerrero','Acapulco'),
(3,'Yucatán','Mérida'),
(4,'Jalisco','Guadalajara');


INSERT INTO babydevs.Asesores_has_Localidad (Localidad_idLocalidad, Asesores_idasesores) 
VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1);


INSERT INTO babydevs.Localidad_has_Asesorados (Localidad_idLocalidad, Asesorados_idAsesorados) 
VALUES (1,1),(1,2),(2,3),(3,4),(4,5);