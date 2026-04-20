# pruebaTecnicaReact_Maquetacion_HITSS


# 🚀 Nombre del Proyecto
PRUEBA TECNICA -MAQUETADO EN REACT -DEB FRONT END.

## 📋 Índice
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Contribución](#contribución)
- [Licencia](#licencia)

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

## 🚀 Uso
Ejemplos de cómo ejecutar el proyecto o fragmentos de código básicos para mostrar su funcionalidad.

```

npm start

```

## 💻 Tecnologías Utilizadas
* **Frontend:** React, TypeScript y SASS (SCSS)
* **Backend:** Node.js y Express (API Rest)
* **Entorno de desarrollo:** Vite

## 🤝 Contribución
Si deseas contribuir, por favor sigue estos pasos:
1. Haz un Fork del proyecto.
2. Crea una rama para tu mejora (`git checkout -b feature/MejoraIncreible`).
3. Haz un commit de tus cambios (`git commit -m 'Añadir mejora'`).
4. Haz un Push a la rama (`git push origin feature/MejoraIncreible`).
5. Abre un Pull Request.

## 📄 Licencia
Este proyecto está bajo la Licencia [MIT] - mira el archivo [LICENSE.md](LICENSE.md) para detalles.