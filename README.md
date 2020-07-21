# Data Lovers Harry Potter

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Definición del producto](#3-definición-del-producto)
* [4. Historias de usuarios](#4-historias-de-usuarios)
* [5. Diseño de la Interfaz de Usuario](#5-diseño-de-la-interfaz-de-usuario)
* [6. Diseño final de la aplicación](#6-diseño-final-de-la-aplicación)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir una interfaz amigable y entendible por el usuario
al lado derecho.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto construimos una página web para visualizar un
_conjunto (set) de datos_** adecuado a la data de Harry Potter.

Nuestra página permite visualizar la información más relevante de los
personajes, también puedes filtrar la data considerando casa, género y rol

Estos son los datos propuestos para mostrar la información:

* [Harry Potter](src/data/potter/potter.json).
     Este set de datos muestra la lista de los personajes del mundo de [Harry Potter: Wizards Unite](https://www.wizardingworld.com/), junto con sus respectivas características mencionadas en la serie de novelas de Harry Potter escrita por la autora británica J.K.Rowling.
     - [Investigación con jugadores de Harry Potter: Wizards Unite](src/data/potter/README.md)

## 3. Definición del producto

El proceso de diseño del producto se basó en las necesidades de los usuarios de conocer características
e información relevante de los personajes de Harry Potter.
Para esto, comenzamos realizando una encuesta para saber que datos eran considerados de mayor relavancia. Una
vez determinado comenzamos a definir las historias de usuario.

## 4. Historias de usuarios

Mediante la encuesta realizada y los datos proporcionados inicialmente por Laboratoria definimos cada una de 
las historias de usuario y los criterios de aceptación de cada uno. Ocupamos Trello para mantener una adecuada planificación de cada historia y sus tareas.

### Encuesta

https://docs.google.com/forms/d/1vEE2C56sajxGXKbcm4ay4gPJcZStF1FbRFcj-jvUOn0/viewform?edit_requested=true

## 5. Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Al finalizar el proceso de encuestas definimos los siguientes sketches:

![2](https://user-images.githubusercontent.com/66650610/87066878-46ed9880-c1e1-11ea-8088-73408ec57b64.jpeg)
![3](https://user-images.githubusercontent.com/66650610/87066918-52d95a80-c1e1-11ea-8478-69a70f41380f.jpeg)
![4](https://user-images.githubusercontent.com/66650610/87066943-5d93ef80-c1e1-11ea-9e13-897168bbe14e.jpeg)

Acá podemos ver el contenido inicial, se visualiza la información de cada personaje y los 
filtros pensados en primera instancia.


#### Prototipo de alta fidelidad

Una vez definido el sketch pasamos al prototipo de alta fidelidad diseñado en figma:

![figma primero](https://user-images.githubusercontent.com/66650610/87202451-965dc280-c2ce-11ea-89af-f58d2a2c49ee.png)

Este fue el resultado luego de la primera historia de usuario desarrollada durante la primera semana, sin embargo, luego del feedback del primer spring el diseño cambió quedando finalmente de la siguiente forma: 
 
![Harry Potter – Figma1](https://user-images.githubusercontent.com/49289372/87862705-1c0ded80-c921-11ea-9119-05f0cabb3683.png)



## 6. Diseño final de la aplicación

![diseño-final1](https://user-images.githubusercontent.com/49289372/87862776-c38b2000-c921-11ea-84ee-ffd62e2c4aa6.png)