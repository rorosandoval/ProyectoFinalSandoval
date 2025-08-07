# TecnoFast

### Proyecto Final - Desarrollador Front End con React

## Descripción del Proyecto

Este es el Front End de una Single Page Application (SPA) de e-commerce, desarrollada con React. La aplicación permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, ver los detalles de cada producto, agregar ítems a un carrito de compras y completar una orden.

El proyecto implementa la conexión a una base de datos en la nube (Firebase/Firestore) para gestionar el catálogo de productos y almacenar los registros de las compras realizadas.

## Funcionalidades Principales

* **Catálogo de Productos:** Vista principal que muestra un listado de todos los productos disponibles.
* **Filtro por Categorías:** Navegación entre distintas categorías (`Hardware`, `Periféricos`, etc.) que filtra dinámicamente el catálogo.
* **Vista de Detalle:** Acceso a una vista individual por cada producto, mostrando información detallada, stock y la opción de agregarlo al carrito.
* **Contador de Ítems (`ItemCount`):** Componente para seleccionar la cantidad de unidades a agregar al carrito, con validaciones de stock.
* **Carrito de Compras:** Gestión del estado del carrito de compras utilizando el `Context` de React. Muestra los productos, cantidades y totales.
* **Base de Datos en la Nube:** Conexión a **Firestore** para almacenar el catálogo de productos y registrar las órdenes de compra.
* **Checkout:** Un formulario para que el usuario ingrese sus datos, lo que genera una nueva orden en la base de datos y vacía el carrito.
* **Navegación SPA:** Uso de `React Router` para una navegación fluida sin recargar la página.
* **Alertas personalizadas:** Implementación de `sweetalert2` para mostrar mensajes y confirmaciones más atractivos al usuario.
* **Diseño Responsivo:** Estilos implementados con Bootstrap y CSS para una experiencia de usuario consistente en diferentes dispositivos.

## Tecnologías Utilizadas

* **React** - Librería para la interfaz de usuario.
* **React Router DOM** - Para la gestión de la navegación y las rutas.
* **Firebase/Firestore** - Servicio de base de datos en la nube.
* **Bootstrap** - Framework de CSS para el diseño de la interfaz.
* **SweetAlert2** - Librería para alertas personalizables y más atractivas.
* **CSS** - Hojas de estilo personalizadas para un diseño único.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/rorosandoval/coder-react.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd coder-react
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que te indique la terminal).

### Autor

**[Rodrigo Sandoval]**