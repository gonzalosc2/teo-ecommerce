# Teo's E-commerce

El presente proyecto denominado "Teo's E-commerce" es una página de e-commerce de ventas de libros ficticios.

Todos los títulos, descripciones, precios y cantidades fueron generadas por medio de [ChatGPT](https://chat.openai.com/). En cuanto a las imágenes, estas son genéricas y extraídas desde Google Images.

Este proyecto responde al requirimiento de proyecto final solicitado en el curso de ReactJS de [Coderhouse](https://www.coderhouse.cl/). El mismo se encuentra construido en React, mediante `create-react-app`.

## Funcionalidades de la página

- Agregar un ítem al carrito en base a la cantidad que se desee; sujeto a stock disponible.
- Revisar detalle del producto y stock disponible para cada uno de los ítems desplegados en las distintas secciones.
- Navegación a distintas páginas por medio de _Tabs Bar_, ícono de carrito, botón de búsqueda, además del botón de detalle. Lo mismo se puede realizar mediante URL, con la salvedad que si se ingresa una dirección incorrecta, será re-dirigido a la sección que corresponda según sea el caso.
- Búsqueda de orden de pedido en base a _orderId_, en donde se despliega el detalle de lo ingresado al carrito, su valor total y datos de referencia (no personales): nombre, apellido, fecha de generación de compra. (Se omite correo electrónico y teléfono por ser datos personales)
- Formulario de datos para individualización de comprador de la orden. Además de botón de cancelar compra en caso que no se desee seguir con el proceso (esto borra el carrito).
- Toda sección que no podea un _Tabs Bar_ posee un botón de volver a: sección anterior o página de inicio.
- Header con nombre del sitio redirecciona a la Home.

## Paquetes usados

- [Charka UI](https://chakra-ui.com/): Librería que presenta un entorno de UI que facilita el despliegue de tarjetas para los ítems como también los íconos y botones usados. Se usa como alternativa de [MaterialUI](https://mui.com/material-ui/) con el objeto de aprender una libería distinta.
- [React Router](https://reactrouter.com/en/main): Librería para configurar la navegación/ruteo por el lado del cliente. Esta permite que la aplicación actualice la URL desde acciones, como un _click_ en un _link_ o botón sin tener que realizar otra petición a otro documento desde el servidor.
- [Firebase](https://firebase.google.com/): Liberaría usada para como SDK. En particular se usa Firestore para el almacenamiento de la información a desplegar en la página, como para el registro de las órdenes de compra.
- [React JS](https://react.dev/): Principal libería en la cual se encuentra construido el proyecto. Es mandatoria su uso en este proyecto para demostrar dominio de la misma.

## Comandos necesarios para revisar y desplegar proyecto

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
