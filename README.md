# Cifrado César

## Índice

- [Cifrado César](#cifrado-césar)
  - [Índice](#índice)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Definición del proyecto](#2-definición-del-proyecto)
    - [2.1 Perfil de usuario](#21-perfil-de-usuario)
    - [2.2 Objetivos del usuario con respecto a nuestro producto](#22-objetivos-del-usuario-con-respecto-a-nuestro-producto)
  - [3. Resolución del problema](#3-resolución-del-problema)
  - [4. Decisiones de Diseño](#4-decisiones-de-diseño)
    - [4.1 Elementos visuales](#41-elementos-visuales)
    - [4.2 Colores](#42-colores)
    - [4.3 Tipografía](#43-tipografía)
  - [5. Prototipo](#5-prototipo)
  - [6. Test de Usuario e iteración](#6-test-de-usuario-e-iteración)
  - [7. Organización](#7-organización)
  - [8. Propuestas de mejoras](#8-propuestas-de-mejoras)
  - [9. Autores](#9-autores)

***

## 1. Preámbulo

Este proyecto está basado en el Cifrado César, el cual cumple el objetivo de Codificar o Decodificar un mensaje por medio de una sustitución de caracteres (Offset/Desplazamiento). Con el fin de devolver al usuario un mensaje cifrado.

Leer más información acerca del [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)

Para el desarrollo de esta aplicación, nos enfocamos en un tipo de usuario más específico, el cual fuera un trabajador del Gobierno de Chile. Nos dimos cuenta que en este ambiente existe una necesidad potente de comunicarse interna, secreta y rápidamente con otro trabajador.

## 2. Definición del proyecto

### 2.1 Perfil de usuario

Los principales usuarios que interactúan con nuestra interfaz, son específicamente los trabajadores del Gobierno de Chile, tales como los ministerios.
Por otro lado nuestros usuarios son personas que disponen de poco tiempo en sus actividades, que necesitan constantemente mantenerse comunicados, de una forma fácil, rápida, secreta y segura.

### 2.2 Objetivos del usuario con respecto a nuestro producto

* El objetivo principal de nuestros usuarios es contar con un espacio personal y confidencial, en donde puedan ingresar cierto mensaje con la intención de transformarlo a un mensaje secreto o de revelarlo según la necesidad.
  
* Otro de los objetivos que nuestros usuarios esperan es poder contar con una interfaz accesible e intuitiva, con el fin de ahorrar tiempos y comunicarse de manera ágil.
  
* Por otro lado el usuario espera que se cumpla con el objetivo de ser un espacio discreto, seguro y confiable, al que sólo puedan acceder miembros del gobierno, previamente registrados, con el fin de que agentes externos no se enteren de lo comunicado.

## 3. Resolución del problema

Viendo los requerimientos de nuestros principales usuarios, es que nos dimos cuenta que podíamos crear una plataforma que supla estas necesidades, ofreciendo una interfaz simple, sencilla y fácil de usar.

El valor agregado de nuestra plataforma es que el usuario en pocos pasos será capaz de integrar un mensaje, ya sea cifrado o descifrado con el fin de obtener el resultado esperado. Además otro de los aspectos importantes es la integración de un botón de copiar dicho mensaje, para que posteriormente pueda ser enviado. Por otro lado, para mejorar la usabilidad y accesibilidad de nuestro sitio, integramos un botón de redactar mensaje, que envía al usuario directamente a su bandeja de correo electrónico, simplificando los pasos.

## 4. Decisiones de Diseño

Principalmente se pensó en desarrollar una plataforma que no tuviese muchos elementos distractores, visualmente hablando, ya que esto podría confundir y retrasar las acciones de nuestros usuarios.
Es por esto que la estructura de nuestra aplicación cuenta con solo dos pantallas, una de bienvenida, donde el usuario previamente logueado, ingresa con su alias y accede a la pantalla principal, la cual ofrece a primera vista un espacio donde nuestros usuarios puedan escribir o pegar un mensaje, ya sea para codificar o decodificar.

### 4.1 Elementos visuales
Se pensó que para la creación de esta interfaz fuese semejante al estilo ya establecido en los sitios del gobierno, con la intención de generar una unidad y aire visual que logre hacer que el usuario se sienta cómodo y se adapte fácilmente. 
Nuestra plataforma cuenta no cuenta con distractores visuales y ofrece un ambiente formal digno de una organización gubernamental.

### 4.2 Colores
Se decidió utilizar para la interfaz 3 colores principales: 
* Gris: el cual transmite la sensación de prestigio, otorgándole a los usuarios mayor confianza al utilizar la app.
  
* Azul: el cual representa seriedad, confianza, seguridad y transmite armonía, dándole al usuario una cercanía con el producto.
  
* Blanco: finalmente se optó por complementarlo con el blanco para hacer la interfaz más balanceada y dar la sensación de limpieza y descanso visual. 

### 4.3 Tipografía

La tipografía utilizada para este proyecto es “Roboto” ya que el estilo de las letras es Sans-serif, facilitando la lectura y legibilidad a nuestros usuarios.
La Familia tipográfica seleccionada es :Ligth 300, Regular 400 y Bold 700.

## 5. Prototipo

* Sketch ([Bocetos](https://drive.google.com/drive/folders/1HAfAfXIWlD81a2vXc855gEZ_UB-Er_7t))
  
* Prototipo baja fidelidad ([Invision](https://samanthamoreno609642.invisionapp.com/console/Prototype-Proyect-Cipher-ckb7z74h4149d01brqdswjncl/ckb86bui4013z01bjzd2ni07c/play))
  
* Prototipo alta fidelidad y hojas de estilos ([Figma](https://www.figma.com/proto/07wBlGJ4oZeFXFWsuAhkc9/Proyecto-cifrado-C%C3%A9sar?node-id=5%3A12&scaling=min-zoom))

## 6. Test de Usuario e iteración

Pruebas de posibles errores y obstáculos de la interfaz y propuestas de mejora.

Para realizar los Test de usuario, le pedimos a 4 personas que navegaran dentro de nuestra interfaz, donde nos pudimos percatar que en la ejecución de ciertas tareas ellos tuvieron las mismas problemáticas para llevar a cabo los requerimientos del test, siendo estas:

* Explicarle a los usuarios en qué consiste un desplazamiento u Offset.
  
* Hacer más amigable y entendible los títulos de los botones.
  
* Agregar elementos visuales como iconos, para complementar las acciones.
  
* Añadir un botón de copiar al resultado del mensaje, para mejorar la usabilidad.
  
* Que al ejecutar otra tarea se restablezca los valores de los textarea.
  
* Indicar que ciertos campos son requeridos para avanzar.

* Unificar la forma de referirse al usuario en tercera persona.

([Videos](https://drive.google.com/drive/folders/1WSqjW3B8qd0VGAAxMm7RoHnljhtB-L9e)).

## 7. Organización 

Nuestra forma de trabajar se basó en la metodología ágil, ya que a diario tuvimos Dailys para proponer las tareas diarias, además de cumplir con estas, nos creamos un Tablero en Trello donde fuimos colocando pequeños objetivos con la intención de llegar a la meta final a tiempo, sin que se nos olvidará nada.

([Trello](https://trello.com/b/DcSYE1nM/proyecto-cifrado)).

## 8. Propuestas de mejoras

Consideramos que nuestra aplicación no está 100% finalizada y que podríamos hacer una nueva iteración, para seguir mejorando  
ciertos aspectos de la interfaz, tales como:

* Para mejorar la seguridad de nuestro proyecto, creemos que dentro del login podríamos añadirle un nuevo campo de contraseña, para reforzar la seguridad.
* Otro de los aspectos a mejorar seria incorporar el boton de copiar dentro del textarea de los resultados, ya que así mejoraría la usabilidad.
* Además, integrar un botón colapsable para las instrucciones, para que de esta forma los campos de texto tomen más protagonismo y ocupen 
* más espacio.
* También quisiéramos otorgarle la funcionalidad al icono de las flechas (que esta al medio de los botones), de que intercambie el botón activo, ya que actualmente solo es un apoyo visual, para entender la acción.

## 9. Autores 

* Natalia Goicoechea.
* Samantha Moreno.
