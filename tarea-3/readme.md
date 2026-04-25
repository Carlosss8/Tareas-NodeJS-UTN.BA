## TAREA N°3

## DECRIPCION

Aplicación desarrollada en Node.js utilizando Express y Mongoose que implementa una API REST para gestionar indumentaria (clothes).
Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) mediante rutas HTTP.
Se utiliza Bruno/Postman para probar los endpoints y MongoDB como base de datos.

## Lenguajes utilizados

- NodeJS
- Express
- MongoDB
- Mongoose
- Bruno

## Clonar el repositorio
## 1. Clonar el repositorio

bash
git clone https://github.com/Carlosss8/Tareas-NodeJS-UTN.BA

## 2. Ingresar a la carpeta del proyecto

cd tarea-3

## 3. Instalar dependencia

npm install express
npm install mongoose

## 4. Configuracion de variable de entorno

Crear un archivo .env en la raíz del proyecto:
MONGO_URI=tu_cadena_de_conexion

## 5. Ejecutar el servidor

node server.js

El servidor se ejecutará en:
http://localhost:3000

## Rutas de la API

- GET /clothes

Obtiene toda la indumentaria.
![alt text](image.png)

🔹 POST /clothes
Crea una nueva prenda.
![alt text](image-2.png)

Ejemplo Body (JSON):

{
  "name": "Pantalon",
  "price": 150,
  "description": "Pantalon de algodón"
}

🔹 GET /clothes/

Obtiene una prenda por ID.
![alt text](image-3.png)

🔹 PUT /clothes/

Actualiza una prenda.
![alt text](image-4.png)

Ejemplo Body:

{
  "name": "Remera ",
  "price": 200
}
🔹 DELETE /clothes/

Elimina una prenda


## AUTOR

NOMBRE: Carlos Rodriguez 
CURSO: Desarrollo con NodeJS
UNIDAD: Modulo 1 - Unidad 3

## Fuentes

- Node.js: https://nodejs.org/
- Express: https://expressjs.com/
- Mongoose: https://mongoosejs.com/

## Ejercicios y PostData