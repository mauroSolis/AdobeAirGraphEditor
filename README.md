# Editor de Gráficas Estadísticas #

Mauro Solís Hernández 200628965


## Introducción ##

La aplicación consiste en una herramienta desarrollada en HTML5, utilizando el framework Bootstrap y compilada para trabajar bajo el runtime de Adobe AIR.
Esta carga y despliegua datos tomados desde una tabla <table> html. Además se utiliza la biblioteca de gráficos visualize.jQuery, la cual es una extensión para la biblioteca de trabajo javascript llamada Jquery.

visualize.jQuery, es una biblioteca para generar gráficos utilizando el elemento <table> de HTML, extrayendo de la misma la información que requiere. Al igual que muchas bibliotecas (librerías) gráficas,
visualize.jQuery soporta una amplia variedad de tipos de gráficos incluyendo barras, pies, lineal, etc. Además ofrece una calidad gráfica muy buena.
visualize.jQuery.js es gratuito, y de uso libre.

Se realizó el cambio de biblioteca grafica ya que al cambiar de tecnología base (de XUL a AIR) esta nueva biblioteca permite una interacción con el usuario mas amigable.


## Descripción del Contenido a Desplegar ##

El contenido que despliega la aplicación son gráficos estadísticos. Actualmente se despliegan los siguientes gráficos:

	- Gráficos de Línea
	- Gráficos de Barras
	- Gráficos Circulares o Pastel


## Definición de estructuras de datos ##

Las estructuras de datos utilizadas son en su mayoría, son funciones que recorren el contenido de la tabla. Pero además se utiliza archivos CSV para la lectura de los datos a la aplicación.

Para la lectura de datos se podrian utilizar formatos CSV, JSON o XML. Sin embargo elegimos el formato CSV ya que es con el que se relaciona mejor con la muestra en tablas de datos. 


## Forma de Compilación, ejecución y utilización de la aplicación ##

**Compilación:**

La aplicación ya se encuentra compilada en fomato .air, esto permite el ejecutarla directamente bajo el runtime de adobe AIR

**Ejecución de la aplicación**

Para ejecutar la aplicación se utiliza el runtime de Adobe air por lo que al ejecutarla como cualquier aplicacion Windows, esta se ejecutará permitiendo el trabajo en la misma


## Ejemplos de Datos a utilizar como Pruebas ##

Los datos usados como pruebas son los que carga la tabla inmediatamente se ejecuta el proyecto, pero estos pueden ser modificados en tiempo real para permitir al usuario un trabajo con ejemplos al mismo tiempo y así guiarse en el uso de la aplicación.


## Ventajas, limitaciones observadas y posibles mejoras ##

Entre las ventajas que se encontraron es el manejo de datos mediante tablas, esto le permite al usuario sentirse mas comodo y realizar trabajos de manera mas natural sin tener que aprender un seudo-lenguaje para dar forma a su trabajo.

Una de las mejoras que podria tener es el hecho de la incorporación de columnas y filas para que la misma sea mas dinamica.

Otra mejora que se ha de realizar es el hecho de usar Node.js como codigo al lado del servidor permitiendo el manejo de archivos directamente y asi implementar el guardado y carga de archivos hacia la tabla y modificarla.

Entre los inconvenientes encontrados, esta el hecho de la sobre posición de los css de Bootstrap con los requeridos por visualize.jQuery, pero los cuales fueron solucionados sin mayor inconveniente. 

Entre las limitaciones (mas que nada a nivel de estructuración) está, el hecho de al manejarse los datos en tabla y al agregar nuevas columnas o filas, la actualización lleva medio segundo aproximadamente en lo que se selecciona otro espacio de actualización.





