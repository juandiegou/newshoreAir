Configuración de Yarn como Gestor de Paquetes Global para Angular CLI

Angular CLI es compatible con diferentes gestores de paquetes, incluyendo npm y Yarn. Si deseas utilizar Yarn como el gestor de paquetes global para Angular CLI, sigue estos pasos:

1. Instala Yarn si tienes lo tienes instalado puedes hacerlo siguiendo las instrucciones en https://classic.yarnpkg.com/en/docs/install/.

2. Abre una terminal o línea de comandos y ejecuta el siguiente comando para configurar Yarn como el gestor de paquetes global para Angular CLI:

ng config -g cli.packageManager yarn


Esto hace que Angular CLI que utilice Yarn en lugar de npm para la gestión de paquetes de manera global.

Con esta configuración, puedes continuar utilizando Angular CLI como de costumbre, pero ahora estará utilizando Yarn como gestor de paquetes.

Nota: Si en algún momento deseas volver a utilizar npm como gestor de paquetes global para Angular CLI, puedes ejecutar el siguiente comando:

ng config -g cli.packageManager npm

Instalación de Paquetes con Yarn en Proyectos Angular

Una vez que hayas configurado Yarn como tu gestor de paquetes global para Angular CLI, puedes utilizar Yarn para instalar las dependencias de tu proyecto Angular de la siguiente manera:

1. Abre una terminal o línea de comandos y navega hasta el directorio raíz de tu proyecto Angular.

2. Ejecuta el siguiente comando para instalar las dependencias del proyecto utilizando Yarn:

yarn install o yarn


Yarn leerá el archivo `package.json` del proyecto y descargará todas las dependencias especificadas en ese archivo.

3. Espera a que Yarn complete el proceso de instalación. Verás un progreso en la terminal mientras Yarn descarga las dependencias.

4. Una vez que Yarn haya terminado de instalar las dependencias, podrás continuar trabajando en tu proyecto Angular.

Recuerda que en adelante, siempre puedes utilizar `yarn install` para asegurarte de que todas las dependencias estén actualizadas de acuerdo con las especificaciones en tu archivo `package.json`.

Puedes correr el proyecto normalmente con el ng serve o verlo desplegado acá:
https://newshore-air.vercel.app