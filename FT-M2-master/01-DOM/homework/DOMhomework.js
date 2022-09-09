// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:
let toDoItems = [];


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
document.querySelector("#createdBy").innerHTML += " Mariano";
//El document.querySelector permite seleccionar un id (que está dentro de un div) pasándole como parámetro # y el nombre del id
//El .innerHTML deja el texto q está dentro (sino lo vamos a sobreescribir) += "Lo que queremos agregar"  


let spanText = document.querySelector("#createdBy");
spanText.innerText = spanText.innerText + " Mariano";   
// Hace lo mismo, la diferencia está en que, con innerText solo traemos el texto dentro de la etiqueta. inner HTML trae todo el contenido del span.


// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor


  // Tu código acá:
  class ToDo {                          //Creamos una clase ToDo y le pasamos como parámetro 'description' que va a ser lo que nosotros vamos a poner en el
   constructor(description) {           // campo que dice TO Do en el explorador.
    this.description = description;
    this.complete = false;
   }
  }


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
 ToDo.prototype.completeToDo = function () {             //Con prototype agregamos un método llamado "completeToDo" a la clase ToDo 
  return this.complete = true;                           //y seteamos complete en true (antes false)
 }



// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {                        //ES UNA INSTANCIA (FOTO) DE LA CLASE LA Q MODIFICAMOS.
  // Tu código acá:
  let toDoShell = document.createElement ('div');       //Así se crea un elemento (entre paréntesis especificamos que queremos q sea, div, span,etc)
  toDoShell.setAttribute('class', 'toDoShell');         // Agrega la clase q le pasemos //Tambien se puede hacer con .className = 'toDoShell' o getAttribute  
  let toDoText = document.createElement ('span');       // crea el elemento span
  toDoText.innerText = todo.description;               // dentro del span toDoText agregas el objeto'todo' pasado como parámetro y la propiedad .description
                                                       // lo q tenga adentro esa instancia .desscription de la clase toDo será el texto almacenado en la variable
  toDoText.id = index;                                 // le da al toDoText un id con el valor index que pasa por parámetro la función
  if (todo.complete = true) {                          // Si el atribito 'complete' del objeto todo es true se le asigna la clase "completeText" a toDoText
    toDoText.className = 'completeText';               
  }
  
  toDoShell.appendChild (toDoText);                    // .apendChild agrega lo q le pasemos por parámetro (toDoText (span)) como hijo del toDoShell(div)
  toDoText.addEventListener('click', completeToDo);   // Esto se agraga en el punto final. Es para borrar al hacer click en una tarea realiza en el display
  return toDoShell;                                    // devuelve la variable con el hijo dentro, que a su vez tiene los cambios q le hicimos 
  
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {                           
  // Tu código acá:
  let array = toDos.map(buildToDo);                  // Crea un array de instancias del objeto ToDo, un array de fotos del objeto en diferentes momentos
    return array;                                    // hace callback de la función del ejercicio anterior y pushea cada instancia y lo pushea al array

}


// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
  let toDoContainer= document.querySelector('#toDoContainer');      // Declaras la var toDoContainer y guardas el elem del mismo nombre con querySelector
  toDoContainer.innerHTML = '';                                     // Así dejas al elemento q guardaste en la variable vacio 
   let array = buildToDos(toDoItems);                               // Creas una variable q contenga un arr q es la función q saca fotos del objeto en diferentes instancias
   array.forEach(function(elem)  {                                  // Este forEach agrega a cada instancia del obj un elemento HTML 
    toDoContainer.appendChild(elem);                                // que adentro tiene un div, q adentro tiene un span, que adentro tiene la descripción del toDo.
   });
}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
  let toDoInput = document.getElementById('toDoInput');      // guarda en una variable el elemento "toDoImput"
  let todo = new ToDo(toDoInput.value);                      // crea una nueva instancia de la clase ToDo y le pasa el elemento "toDoImput como parámetro"
  toDoItems.push(todo);                                      // Pushea esta nueva instancia al array de instancias q creamos al inicio
  toDoInput.value = "";                                      // Setea el value del elemento toDoImput en vacio
  displayToDos();                                            // Se llama a la función anterior para que agregue Lo que escribamos en el imput de la página.

}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:                                              
let boton= document.getElementById('addButton');            // guarda en una variable el id addButton                
boton.onclick = addToDo;                             //boton.addEventListener('click', addToDo);  // otra variante para hacer lo mismo

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
   const index = event.target.id;         // Es un índice que marca el id del elemento que va a realizar el evento cuando hagas click
  // Tu código acá:
   toDoItems[index].completeToDo();       // ejecutar la func completeToDo sobre el elemento index del array que corresponda
   displayToDos();                        // Llamar a esta func actualiza los elementos q vas a ver en pantalla
 

}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'

displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
