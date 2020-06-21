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
  - [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
    - [Sotf Skills o Habilidades Blandas](#sotf-skills-o-habilidades-blandas)
  - [4. Consideraciones generales](#4-consideraciones-generales)
  - [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
    - [Definición del producto](#definición-del-producto)
    - [Interfaz de usuario (UI)](#interfaz-de-usuario-ui)
    - [Scripts / Archivos](#scripts--archivos)
  - [6. Funcionalidad extra o “Hacker edition”](#6-funcionalidad-extra-o-hacker-edition)
  - [7. Vamos a los detalles. Consideraciones Técnicas](#7-vamos-a-los-detalles-consideraciones-técnicas)
  - [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
    - [Primeros pasos](#primeros-pasos)
    - [Recursos y temas relacionados](#recursos-y-temas-relacionados)
  - [9. Checklist](#9-checklist)
    - [Funcionalidad extra o “Hacker edition”](#funcionalidad-extra-o-hacker-edition)

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

Viendo los requerimientos de nuestros usuarios, nos dimos cuenta que podíamos crear una plataforma que supliera estas necesidades, ofreciendo una interfaz simple, sencilla y fácil de usar.

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

La tipografía utilizada para este proyecto es “Roboto” ya que el estilo de las letras es Sans-serif, facilitando la lectura y legibilidad a nuestross usuarios.
La Familia tipográfica seleccionada es :Ligth 300, Regular 400 y Bold 700.

## 5. Prototipo

* Sketch (link)
  
* Prototipo baja fidelidad ([Invision](https://samanthamoreno609642.invisionapp.com/console/Prototype-Proyect-Cipher-ckb7z74h4149d01brqdswjncl/ckb86bui4013z01bjzd2ni07c/play))
  
* Prototipo alta fidelidad y hojas de estilos ([Figma] https://www.figma.com/proto/07wBlGJ4oZeFXFWsuAhkc9/Proyecto-cifrado-C%C3%A9sar?node-id=5%3A12&scaling=min-zoom)

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

(Link google drive con videos).









## 3. Objetivos de aprendizaje

Trabajando en parejas aprenderán a construir una aplicación web que interactuará
con lxs usuarixs finales a través del navegador, utilizando HTML, CSS y JavaScript
como tecnologías.

Dicho en palabras sencillas, aprenderás a

* Organizar tu tiempo y priorizar tareas en un entorno de
  **alta incertidumbre**.
* Entender las **necesidades del usuario** y cómo proponer una solución.
* Entender la importancia del proceso de prototipado durante la creación de un
  producto digital.
* Utilizar etiquetas semánticas de HTML y elementos de formulario.
* Mostrar elementos de formulario en la pantalla usando **HTML** y **CSS**.
* Utilizar diversos tipos de selectores en CSS: de elemento, de clase, de id.
* Utilizar el modelo de cajas de CSS (border, margin, padding).
* Definir reglas de estilo en CSS.
* Permitir al usuario interactuar con elementos del DOM y hacer que la
  aplicación responda (cifrar/descifrar) cuando ocurran esos
  **eventos del DOM**.
* Manipular _**strings**_ (cadenas de texto).
* Usar **control de flujo** (bucles, condicionales, ...).
* Actualizar la pantalla con los resultados (**manipular el DOM**) a través de
  **innerHTML** o **textContent**.
* **Implementar funciones** dada una descripción de su comportamiento.
* Verificar que tus funciones hagan las cosas para las que fueron creadas
  (**pruebas unitarias (_unit tests_) con Jest**).
* Configurar tu cuenta de git.
* Hacer _fork_ y _clonar_ el repositorio del proyecto.
* Mantener actualizado los cambios en tu repositorio remoto
  (commit, pull, push).
* Desplegar tu proyecto en gh-pages.

### Sotf Skills o Habilidades Blandas
- **Planificación, organización y manejo del tiempo** : Organizarse de manera general, haciendo una estimación aproximada de los tiempos que se necesitarán para la realización del proyecto. Conocer las ceremonias y artefactos ágiles (sprint planning, dailys, retrospectiva, revisión de tablero en trello al menos, etc) a pesar de que no se utilicen con regularidad.
- **Autoaprendizaje** : Demostrar interés y adquirir nuevos conocimientos autónomamente, estudiando de manera independiente, lo que se traduce, en que cuando es necesario, la estudiante buscará aclarar conceptos y resolver dudas sobre la materia.
- **Presentaciones** : Utilizar ciertas estrategias para hablar en público (tono y ritmo de voz adecuado, contacto visual con el público, interacción con medios de presentación), que permitan asegurar un mediano entendimiento de la audiencia.
- **Adaptabilidad** : Afrontar los cambios inesperados o nuevos desafíos con una actitud positiva, aunque no necesariamente se logre accionar o adaptarse de la mejor manera a los diferentes contextos.
- **Solución de problemas** : Trabajar en la búsqueda y en la elaboración de soluciones alternativas a problemas de mediana complejidad.
- **Responsabilidad** : Demostrar actitud de compromiso, reflejandolo en la entrega de trabajo a tiempo, conectándose a la hora acordada y/o avisando cuando no se pueda asistir.
- **Dar y recibir feedback** : Escuchar los comentarios y críticas de los demás de manera respetuosa, y/o comunicar a los demás las opiniones de forma constructiva.
- **Comunicación eficaz** : Comunicar ideas a los demás cuando es necesario, aunque no siempre se fomenten de manera proactiva estas instancias de comunicación.
- **Trabajo en equipo** : Trabajar con otros de forma colaborativa y en base a un objetivo común, entregando ideas para la construcción del proyecto.

## 4. Consideraciones generales

* Este proyecto se debe resolver de manera grupal (dupla o trío).
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
  te preocupes, lo aprenderás durante este proyecto.

## 5. Criterios de aceptación mínimos del proyecto

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 6. Funcionalidad extra o “Hacker edition”

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **alcanzaste los objetivos de aprendizaje** y te queda tiempo, intenta realizar el hacker edition. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/master/topics/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://github.com/Laboratoria/bootcamp/tree/master/topics/scm/01-git)
  instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
  que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows 10
  o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Una de las integrantes del equipo debe realizar un :fork_and_knife:
  [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
  tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
  en ese repo. La otra integrante del equipo deber hacer un fork **del
  repositorio de su compañera** y
  [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
  hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
  asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
  pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[Link](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Diseño de experiencia de usuario (User Experience Design):

* [Ideación](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [Prototipado (sketching)](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
* [Testeo e Iteración](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2020-05-bc-core-scl014/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.


## 9. Checklist

Esta sección está para ayudarte a llevar un control de los objetivos de aprendizaje y las funcionalidades.

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Funcionalidad extra o “Hacker edition”

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
