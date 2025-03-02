# Proyecto Dragon ball - Clean Architecture

Este proyecto es una aplicación web que utiliza la **Clean Architecture**  y se conecta a la **API de Dragon Ball** para mostrar información sobre personajes, transformaciones y más. Los usuarios puedes buscar ssus personajes favoritos.

## Características

- Visualiza una lista de personajes de Dragon Ball.
- Navega a la página de detalles de cada personaje, con información adicional como transformaciones.
- Realiza búsquedas por nombre de personajes.
- Interfaz amigable y dinámica.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **React.js**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router**: Para la navegación entre páginas.
- **Context API**: Para la gestión del estado global (favoritos, mostrar favoritos).
- **Fetch**: Para la comunicación con la API de Dragon Ball (sin usar Axios).
- **Jest & React Testing Library**: Para realizar pruebas unitarias del proyecto.
- **Clean Architecture**: Para estructurar el proyecto de manera modular y escalable.
- **ESLint**: Herramienta para el linting del código JavaScript.
- **Prettier**: Herramienta para el formateo del código.

## Instalación


### 1

```bash
git clone https://github.com/tu_usuario/marvel.git
cd marvel
npm i
npm run dev