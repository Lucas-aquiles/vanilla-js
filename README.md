# vanilla-js
mini aplicacion realizada en Vanilla Javascript . 
Deploy : https://lucas-aquiles.github.io/vanilla-js/


Informacion importante de Jaavascript y ECMAScript
ECMAScript (ES):
ECMAScript es un estándar que define las reglas y especificaciones para el lenguaje de programación JavaScript. En otras palabras, ECMAScript establece cómo debe comportarse el lenguaje y cuáles son sus características y funcionalidades. JavaScript es una implementación concreta de las especificaciones ECMAScript.

 JavaScript es el lenguaje de programación que utilizas para escribir código que se ejecuta en los navegadores web, mientras que ECMAScript es el estándar que define cómo funciona JavaScript y cómo evoluciona con el tiempo mediante la introducción de nuevas características y mejoras en diferentes versiones

 V8 (Google Chrome y Node.js): V8 es un motor de JavaScript de código abierto desarrollado por Google. Es conocido por su alto rendimiento y su velocidad de ejecución. V8 se utiliza en el navegador Google Chrome y también es el motor que impulsa el entorno de tiempo de ejecución de Node.js, lo que permite ejecutar JavaScript en el lado del servidor.

 Blink:
Blink es un motor de renderizado de código abierto desarrollado por Google. Fue bifurcado a partir del motor WebKit en 2013 y se utiliza como el motor de renderizado principal en el navegador Google Chrome y en otros navegadores basados en Chromium, como Microsoft Edge (las versiones basadas en Chromium) y Opera.

El motor de renderizado Blink se encarga de interpretar y representar el contenido HTML, CSS y JavaScript de una página web en la pantalla. Controla cómo se colocan y muestran los elementos en una página, gestionando la disposición, el estilo, la animación y la interactividad. Blink es altamente modular y está diseñado para ofrecer un rendimiento eficiente y una experiencia de navegación rápida.

Webkit:
WebKit es otro motor de renderizado importante que es la base de varios navegadores web, incluyendo Safari de Apple. Aunque Blink es una bifurcación de WebKit, los dos motores de renderizado han seguido caminos de desarrollo separados desde entonces.

Los motores de renderizado, como Blink, WebKit y Gecko, son responsables de renderizar el contenido visual de una página web. E

--------------------------------------------------------------------------------------------------------------------------------------
El "contexto de ejecución" en JavaScript se refiere al entorno en el que se ejecuta el código JavaScript. Contiene información sobre las variables, funciones y otros detalles necesarios para administrar y rastrear la ejecución del código. Hay tres tipos principales de contextos de ejecución en JavaScript: el contexto global, los contextos de función y los contextos de evaluación.

Contexto Global:
El contexto global es el contexto de ejecución más amplio en JavaScript. Cualquier código que no esté dentro de una función se ejecutará en este contexto. Las variables y funciones declaradas en el contexto global son accesibles desde cualquier parte del código. El objeto global (en un navegador, el objeto window) es el objeto que contiene todas las variables y funciones globales.

Contextos de Función:
Cada vez que se llama a una función, se crea un nuevo contexto de ejecución conocido como contexto de función. Este contexto contiene los parámetros de la función, las variables locales declaradas dentro de la función y cualquier otra declaración realizada dentro de esa función. Cuando la función finaliza su ejecución, su contexto se elimina de la pila de contextos de ejecución.

Contextos de Evaluación:
Estos contextos se crean cuando se evalúa código en tiempo de ejecución, como cuando se utiliza la función eval() o se ejecutan funciones de tipo setTimeout o setInterval. Los contextos de evaluación se comportan de manera similar a los contextos de función, pero pueden presentar algunas diferencias en cómo se maneja el ámbito de las variables y las referencias.

Dentro de cada contexto de ejecución, se mantiene un registro de las variables y sus valores en una estructura de datos conocida como entorno de ejecución o "entorno léxico". Esto permite que el intérprete de JavaScript acceda a las variables adecuadas y realice las operaciones necesarias durante la ejecución del código.

Es importante entender el concepto de contexto de ejecución para comprender cómo se administran las variables, cómo se manejan los ámbitos y cómo se realiza el seguimiento de la ejecución del código en JavaScript.
---------------------------------------------------------------------------------------------------------------------------------------------
El "ambiente léxico" o "contexto léxico" en un lenguaje de programación como JavaScript se refiere al ámbito en el que se definen y se acceden a las variables y funciones. Es la parte del código fuente donde se determina cómo se resuelven las referencias a las variables y cómo se accede a ellas en tiempo de ejecución.

Cada vez que se declara una función en JavaScript, se crea un nuevo ambiente léxico que contiene las variables locales, parámetros y referencias a funciones que son accesibles dentro de esa función. El ambiente léxico también captura las relaciones entre las variables y sus ámbitos, lo que permite al intérprete de JavaScript determinar de manera precisa qué variable o función se está utilizando en un punto específico del código.

El ambiente léxico es crucial para entender cómo se resuelven las referencias a variables y cómo se maneja el alcance en JavaScript. Aquí hay un ejemplo simple para ilustrar el concepto:

javascript
Copy code
function outer() {
  var x = 10;
  
  function inner() {
    console.log(x); // Accede a la variable 'x' del ambiente léxico de 'outer'
  }
  
  inner();
}

outer();

------------------------------------------------------------------------------------------------------------------------------------------------------------------
Los conceptos de "Jobs", "Agents" y "Realms" están relacionados con el modelo de concurrencia y la ejecución de código en JavaScript, especialmente en el contexto de las especificaciones del estándar ECMAScript (la especificación que define el lenguaje JavaScript). Estos conceptos son parte de cómo se maneja la ejecución paralela y asíncrona en el lenguaje. A continuación, te proporciono una breve descripción de cada uno:

Jobs:
Un "Job" es una abstracción que representa una unidad de trabajo en JavaScript. Puede ser una función o una serie de instrucciones que deben ejecutarse. Los "Jobs" son manejados por el "Job Queue" (cola de trabajos), que es parte del bucle de eventos en el entorno de ejecución. Los trabajos se agregan al "Job Queue" para su ejecución posterior, generalmente después de que se haya completado la ejecución actual del código. Esto es fundamental para el funcionamiento de tareas asíncronas y promesas en JavaScript.

Agents:
Los "Agents" son entidades en el modelo de concurrencia de JavaScript que manejan la ejecución paralela y asíncrona. Cada "Agent" tiene su propio "Job Queue" y puede ejecutarse en paralelo con otros "Agents". Los "Agents" pueden utilizarse en escenarios de procesamiento intensivo para aprovechar mejor los recursos del sistema y mejorar el rendimiento.

Realms:
Un "Realm" (reino) es una abstracción del entorno en el que se ejecuta el código JavaScript. Puede considerarse como una especie de entorno aislado donde vive y se ejecuta el código. Cada "Realm" tiene su propio conjunto de objetos globales, funciones y variables. Los "Realms" son relevantes para la seguridad y la encapsulación en entornos de ejecución, como en navegadores web, donde se pueden cargar y ejecutar múltiples scripts en una misma página web sin que afecten entre sí.

En resumen, estos conceptos son parte de cómo JavaScript maneja la ejecución asíncrona, la concurrencia y la seguridad en diferentes entornos. Son especialmente relevantes en las implementaciones y especificaciones de JavaScript para garantizar un comportamiento coherente y seguro del lenguaje en diversos contextos, como navegadores web y entornos de servidor.

-----------------------------------------------------------------------

a herencia basada en prototipos es un concepto fundamental en la programación orientada a objetos y se diferencia de la herencia clásica de los lenguajes de programación orientados a clases. En lugar de definir clases y crear objetos basados en ellas, en la herencia basada en prototipos, los objetos se crean a partir de prototipos existentes.

Aquí hay un desglose de los términos clave relacionados con la herencia basada en prototipos:

Prototipo:
Un prototipo es un objeto existente que actúa como modelo para otros objetos. Contiene propiedades y comportamientos que pueden ser utilizados por otros objetos. Los objetos en la herencia basada en prototipos no se crean a partir de clases, sino que se crean clonando o extendiendo prototipos existentes.

Cadena de Prototipos:
La cadena de prototipos es una estructura que enlaza objetos prototipo en una secuencia lineal. Cada objeto prototipo tiene una referencia a su prototipo padre, y esta referencia forma una cadena que puede ser recorrida para buscar propiedades y métodos en cascada. Si un objeto no tiene una propiedad o método en sí mismo, se buscará en su prototipo padre, y así sucesivamente a lo largo de la cadena.

Delegación de Prototipos:
La delegación de prototipos es el mecanismo mediante el cual un objeto puede heredar propiedades y comportamientos de otro objeto prototipo. Cuando un objeto no puede encontrar una propiedad o método en sí mismo, delega la búsqueda a su prototipo padre en la cadena de prototipos. Esto permite la reutilización de código y la creación de jerarquías de objetos sin la necesidad de clases.

Despacho Dinámico:
El despacho dinámico se refiere a la búsqueda de métodos y propiedades en tiempo de ejecución en lugar de en tiempo de compilación. En la herencia basada en prototipos, cuando se llama a un método en un objeto, el sistema busca primero en el objeto actual y, si no lo encuentra, busca en su prototipo padre y así sucesivamente en la cadena de prototipos. Esto permite una mayor flexibilidad y adaptabilidad en el comportamiento de los objetos.

En resumen, la herencia basada en prototipos es un enfoque flexible y poderoso en la programación orientada a objetos, en el que los objetos se crean a partir de prototipos existentes y heredan propiedades y comportamientos a través de la cadena de prototipos. La delegación de prototipos y el despacho dinámico son aspectos esenciales de este enfoque, que permite la creación de jerarquías de objetos de manera más dinámica y adaptable que en la herencia basada en clases tradicional.


