# pruebaTecnicaReact_Maquetacion_HITSS


# 🚀 Nombre del Proyecto
PRUEBA TECNICA -MAQUETADO EN REACT -DEB FRONT END.

## 📋 Índice
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Ejecucion del proyecto](#Ejecucion)
- [Tecnologías](#tecnologías)
- [Estructura](#estructura)

## 📖 Descripción
Objetivo Evaluar la capacidad del candidato para crear la estructura de un proyecto en React, organizar componentes, aplicar buenas prácticas de desarrollo y realizar la maquetación de una interfaz basada en un diseño proporcionado.

## 🛠️ Instalación
Instrucciones paso a paso para configurar el entorno de desarrollo.

`bash
# Clonar el repositorio
git clone https://github.com/jose23021995/pruebaTecnicaReact_Maquetacion_HITSS.git

# Instalar dependencias

1. Introducción de node y npm
    - Verificar en terminal si ya estan instalados (en este caso se ocupo GIT BASH)
        ```
        //Esto debería devolverte un número de versión, por ejemplo: v23.10.0
        node -v

        // Esto debería devolverte la versión de npm, por ejemplo: 10.5.0
        npm -v
        ```
2. En caso de que no se instalo estos dos sigue la siguiente instruccion:
    - Ve al sitio oficial de **[Node.js](https://nodejs.org)** y descarga la versión **LTS**.
    - Ejecuta el instalador descargado y sigue los pasos del asistente (asegúrate de que la opción "Add to PATH" esté activada).
    - Una vez finalizada la instalación, **reinicia tu terminal** (cierra y abre Git Bash).
    - Vuelve a ejecutar los comandos del paso 1 para confirmar que las versiones aparecen correctamente.

#### 3. Generacion del proyecto y comando de su ejecucion 
    -Generacion del proyecto
```
         

        > npx
        > create-vite pruebaTecnicaReact --template react

        |
        o  Package name:
        |  pruebatecnicareact
        |
        o  Install with npm and start now?
        |  Yes
        |
        o  Scaffolding project in A:\proyectos\pruebaTecnica\pruebaTecnicaReact...
        |
        o  Installing dependencies with npm...

        added 152 packages, and audited 153 packages in 23s

        36 packages are looking for funding
        run `npm fund` for details

        found 0 vulnerabilities
        |
        o  Starting dev server...

        > pruebatecnicareact@0.0.0 dev
        > vite
```
    -Validacion de version de REACT
    Al crearse el proyecto ir al archivo package.json y verificar si tiene algo relacionado con react , justo asi:

```
  "dependencies": {
    "react": "^19.2.5",
    "react-dom": "^19.2.5"
  },
```
    -Ejecucion del proyecto
```
        VITE v8.0.9  ready in 2874 ms

        ➜  Local:   http://localhost:5173/
        ➜  Network: use --host to expose
        ➜  press h + enter to show help
```
`

## 🚀 Ejecucion del proyecto
Ejemplos de cómo ejecutar el proyecto o fragmentos de código básicos para mostrar su funcionalidad.

```

npm run dev

```

## 💻 Tecnologías Utilizadas
* **Frontend:** React, TypeScript y SASS (SCSS)
* **Backend:** Node.js y Express (API Rest)
* **Entorno de desarrollo:** Vite

## 🤝 Estructura

1. Estructura de proyecto.

Aqui vemos la estructura de las carpetas y sus archivos correspondientes a paginas, componentes, ficheros, imagenes, estilos e interfaces
```
ª   .gitignore //--> este archivo es el que le dice a git que archivos o carpetas no debe subir al repositorio
ª   eslint.config.js //--> este archivo es el que configura las reglas de eslint para el proyecto
ª   index.html //--> este archivo es el punto de entrada de la aplicacion
ª   package-lock.json //--> este archivo se genera automaticamente al instalar las dependencias del proyecto
ª   package.json //--> aqui se encuentran las dependencias del proyecto
ª   README.md //--> este archivo
+---public
ª   +---assets //--> aqui pongo las imagenes de la aplicacion
ª       ª   hero.png
ª       ª   react.svg
ª       ª   vite.svg
ª       ª
ª       +---paso1
ª       ª       shopping-bag.png
ª       ª
ª       +---paso2
ª       ª       archive.png
ª       ª
ª       +---paso3
ª       ª   ª   check-square.png
ª       ª   ª
ª       ª   +---hijo //--> aqui pongo las imagenes que se reutilizan en el paso 1 y 3
ª       ª           ceIco-reversa-portabilidad1.png
ª       ª           ceIco-sim1.png
ª       ª           Group321.png
ª       ª
ª       +---paso4
ª       ª       check-square.png
ª       ª
ª       +---paso5
ª       ª       file-text.png
ª       ª
ª       +---paso6 
ª               check-circle.png
ª
+---src //--> aqui va el codigo fuente de la aplicacion
    ª   App.css //--> aqui van los estilos globales de la aplicacion
    ª   App.jsx //--> aqui va el componente principal de la aplicacion
    ª   index.css //--> aqui van los estilos globales de la aplicacion
    ª   main.jsx //--> aqui va el punto de entrada de la aplicacion
    ª
    +---components //--> aqui van los componentes de la aplicacion
    ª   ª   RightSection.jsx //--> este componente es el que muestra la parte derecha de la aplicacion
    ª   ª   StepperProgress.jsx //--> este componente es el que muestra el progreso
    ª   ª
    ª   +---stepps //--> aqui van los componentes de cada paso
    ª           Step5.jsx //--> este componente se reutiliza para el paso 5 y 2
    ª           Stepp1and3.jsx //--> este componente se reutiliza para el paso 1 y 3
    ª           stepp2.jsx //--> este componente se reutiliza para el paso 2 y 5
    ª           Stepp4.jsx //--> este componente se reutiliza para el paso 4 y 6
    ª
    +---data //--> aqui van los datos de la aplicacion
    ª       options.ts //--> aqui van las opciones de cada paso
    ª       steps.ts //--> aqui van los datos de cada paso
    ª       texts.ts //--> aqui van los textos de la aplicacion
    ª
    +---pages //--> aqui van las paginas de la aplicacion
    ª       Steppers.jsx //--> esta pagina es la que se muestra al iniciar
    ª       Steppers_end.jsx //--> esta pagina es la que se muestra al finalizar
    ª
    +---styles //--> aqui van los estilos de la aplicacion
            end.scss
            responsive.scss
            rightSection.scss
            stepp1.scss
            stepp2.scss
            stepp4.scss
            Stepp5.scss
            StepperProgress.scss
            styles.scss
            variables.scss
```
2. ramas del proyecto:
```
a. main // Rama principal que contiene únicamente código estable y finalizado (Producción).
b. integracion // Rama de pre-producción donde se unen todas las características para pruebas globales.
c. feature/componentes // Desarrollo de componentes generales y reutilizables de la interfaz.
d. feature/01_creacion // Fase inicial del proyecto y configuración de archivos base.
e. feature/02_estructuraDeProyecto // Definición de carpetas, arquitectura y ruteo.
f. feature/03_componentes // Segunda fase de creación de piezas visuales específicas.
g. feature/04_refinamiento // Ajustes finales, corrección de detalles y pulido de estilos.
h. feature/05_jquery-type-inputs // Lógica de validación estricta y máscaras para los inputs.

```
3. proyecto:
https://github.com/jose23021995/pruebaTecnicaReact_Maquetacion_HITSS/tree/main

