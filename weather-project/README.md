#  weather-project

Este proyecto proporciona información sobre el tiempo. Es un recurso valioso para cualquier persona que desee conocer las condiciones meteorológicas actuales en una ubicación específica de España. A continuación, te proporciono una descripción de una web que ofrece servicios de pronóstico del tiempo:

Características Principales:

1. **Pronóstico Preciso**: weather-project utiliza datos en tiempo real y fuentes confiables como es AEMTET para proporcionar pronósticos precisos. Te ofrece información sobre la temperatura actual, el máximo y mínimo del día y un pronóstico general del cielo.

2. **Información Histórica**: accede a datos ya consultados

3. **Añade a Favoritos tu Ciudad**: puedes guardar en tus favoritos tu ciudad favorita

4. **Búsqueda offline**: puedes consultar la información ya buscada aun sin tener conexión a internet.

Con este proyecto me comprometo a brindarte la información meteorológica que necesitas de manera fácil de entender y accesible en cualquier momento. 

En resumen, es una herramienta esencial para que las personas obtengan información precisa y actualizada sobre el clima, lo que les permite tomar decisiones informadas y estar preparadas para cualquier condición meteorológica que puedan enfrentar.

Agradecemos a [https://www.el-tiempo.net/] por su contribución de datos meteorológicos a través de su API. Puede encontrar información sobre el uso de datos en [https://www.el-tiempo.net/mas-informacion](https://www.el-tiempo.net/mas-informacion)

## Configuración IDE recomendada

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Soporte de tipos para importaciones `.vue` en TS

TypeScript no puede manejar información de tipos para importaciones `.vue` por defecto, así que reemplazamos el CLI `tsc` con `vue-tsc` para la comprobación de tipos. En editores, necesitamos [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) para hacer que el servicio de lenguaje TypeScript sea consciente de los tipos `.vue`.

Si el plugin independiente de TypeScript no te parece lo suficientemente rápido, Volar también ha implementado un [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) que es más eficiente. Puedes activarlo siguiendo los siguientes pasos:

1. Desactivar la extensión TypeScript incorporada
    1) Ejecute `Extensions: Show Built-in Extensions` desde la paleta de comandos de VSCode
    2) Busque `TypeScript and JavaScript Language Features`, haga clic con el botón derecho y seleccione `Disable (Workspace)`.
2. Recarga la ventana VSCode ejecutando `Developer: Recargar ventana` desde la paleta de comandos.

## Personalizar la configuración

Véase [Vite Configuration Reference](https://vitejs.dev/config/).

## Configuración del proyecto

```sh
npm install
```

### Compilar y Hot-Reload para el Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint con [ESLint](https://eslint.org/)

```sh
npm run lint
```
