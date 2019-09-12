# mean-login
Login usando nodejs mongo y angular
# mean-login

El proyecto consiste en la creación de un login. Al loguearse se valida si es
usuario administrativo o asistente..
Dependiendo el rol del usario se redireccionará a la ruta correspondiente.
El usuario administrativo podrá ver los componentes de registro usuario y oficinas.
El usuario Asistente podrá ver el componente de citas y reportes.



### Pre-requisitos 📋

Se necesita que se tenga instalado nodejs, espressjs, mongodb y angular.
Link para descargar nodejs
https://nodejs.org/es/
**Descarga la versión Lts

Link para descargar mongodb
https://www.mongodb.com/download-center/community
**Descarga segun versíon de sistema operativo que tengas


**Express viene integrado en nodejs, en el apartado que sigue está
  un link del tutorial.


** Angular se instala con el gestor de paquetes npm de nodejs

### Instalación 🔧

1. Intalación de nodejs..
   Tutorial
   https://aprendiendomean.wordpress.com/2017/07/16/instalando-nodejs-en-windows-10/#more-23
   
2. Instalación de mongodb
   Tutorial
   https://aprendiendomean.wordpress.com/2017/07/16/instalacion-y-configuracion-de-mongodb-en-windows-10/#more-99
   Después de haber instalado mongo, crea en la ruta C:/ la carpeta data y dentro
   de ella la carpeta bd

3. Instalación de Angular
    Una vez instalado NPM ejecuta la terminal y escribe:
 npm install -g @angular/cli
Este comando instalará Angular cli de forma global en nuestro equipo.
Angular cli es la herramienta de consola de Angular.





## Arrancando ⚙️
  
  El proyecto se coloca en la ruta que desees, por lo regular c/:
  Abres la termina y te vas al diretorio del proyecto 
  depués haces un cd backend y ejecutas lo siguiente
  npm run start

  Después haces un cd a la carpeta frontend y ejecutas
  el comango ng serve 

  Para probar el server desde el navegador podemos hacer con la url:
  http://localhost:3000/
  **3000 es el puerto

  para probar angular desde el navegador podemos hacer con la url:
  http://localhost:4200/
  **4200 es el puerto

Coloca en el navegador 
http://localhost:4200/auth/login

Los accesos son los siguientes:
usuario administrador:
email: nando@gmail.com
contraseña: 123456

usuario asistente
ana@gmail.com
contraseña: 123456
## Deployment 📦


## Construido con 🛠️

  Mean:
  nodejs
  Expressjs v10.16.3
  mongodb  v4.0.12
  Angular v8


