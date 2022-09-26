var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    resultSet = resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  }
  return resultSet;
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  /*
  if(selector.charAt(0) === '#'){return 'id'};
  if(selector.charAt(0) === '.'){return 'class'};
  if(selector.indexOf('.') > 0){return 'tag.class'};
  if(selector.indexOf('.') === -1){return 'tag'};
  */

  if(selector[0] === '#') {      // Si el primer caracter del string es # es un ids
    return 'id';
  }
  if(selector[0] === '.'){        // Si el primer elemento es un "." es un class
    return 'class';
  }
  if(selector[0] !== '.' && selector.includes('.')) {     //El primer caracter distinto de "." e incluir . en algun otro caracter es tag.class
    return 'tag.class';
  }
  if(selector.includes(">")) {
    return 'childCombinator';
  } 
  if(selector.includes(" ")) {
    return 'descendantCombinator';
  }
  if (selector[0] !== '#' && selector[0] !== '.') {       // Si el primer elemento del string es diferente de . y # es tag
    return 'tag';
  }  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);       //Se guarda en una var la función que hice en el punto anterior
  var matchFunction;                                      // 
  if (selectorType === "id") {                            //Si el selector es de tipo Id, asignar a la var matchFunction "el"
    matchFunction = el => {              
      return '#' + el.id === selector                     //retorna "#" concatenado con "el.id" y debe ser igual al selector pasado por parámetro
    }

  } else if (selectorType === "class") {              // Además, si el selectro es de tipo "class"
    matchFunction = el => {                           //El método classList que se le aplica a "el" devuelve una colección de los atributos de la clase
      var classes = el.classList;                     // y lo guarda en la variable "clases"
      for (var i = 0; i < classes.length; i++) {      // Se recorre la classList con un for y si el primer caracter de cada elemento es un "." y además es
        if('.' + classes[i] === selector){            // igual al selector, quiere decir que estamos hablado de una clase.
        return true                                   //retorna true
        }
      }
      return false;                                   // Si no se cumple no es una clase.
    }

} else if (selectorType === "tag.class") {            //Si el selector es un "tag.class"
    matchFunction = el => {                           //
      var [tag, clase] = selector.split('.');         // Acá se declaran dos variables, "tag" y "clase" y se le va a hacer split al selector en el "."
                                                      // esto va a almacenar lo q esté antes del "." en la var tag. Y loq está después en la var "clase" 
     
      return matchFunctionMaker(tag)(el) && matchFunctionMaker('.' + clase)(el);    // el return concatena la var tag con la var class antecedida por un "."
    }

  } else if (selectorType === "tag") {      //si es tag 
    var matchFunction = el => {               //
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());     //
    };
  }
  // Extra test

  // En caso de que nos pasen un elemento con un ascendente directo: <div><span></span></div>
  if (selectorType === "childCombinator") {
    return element => {

      // ["div > span"] // ["div", ">", "span"] // ["div>span"] // ["div", "span"]
      let [father, child] = selector.toUpperCase().split(" ").join("").split(">"); // ["div", "span"]

      return (element.parentNode.tagName === father) && (element.tagName === child);//retorna true si el padre del elemento html es igual al padre del selector y si el elemento html es igual al hijo del selector
    }
  }

  // En caso de que nos pasen un elemento con un ascendente: <div><span><li></li></span></div>
  if (selectorType === "descendantCombinator") {//si es descendantCombinator
    return element => {//element es el elemento html

      // ["div li"] // ["div", "li"]
      var [rootFather, descendant] = selector.toUpperCase().split(" ");//separa el selector en rootFather y descendant
      let father = false;//inicializa la variable father en false

      if (element.parentNode) {//si el padre del elemento html existe
        father = element.parentNode;//father es igual al padre del elemento html
        while (father) {//mientras father exista
          if (father.tagName === rootFather) break//si el padre del elemento html es igual al rootFather, se rompe el ciclo
          father = father.parentNode;//father es igual al padre del padre del elemento html
        }
      }
      return father && father.tagName === rootFather && element.tagName === descendant;//retorna true si el padre del elemento html es igual al rootFather y si el elemento html es igual al descendant
    }
  }

  return matchFunction;
}
var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


