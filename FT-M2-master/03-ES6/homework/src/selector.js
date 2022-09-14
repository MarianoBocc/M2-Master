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
  if (selector[0] !== '#' && selector[0] !== '.') {       // Si el primer elemento del string es diferente de . y # es tag
    return 'tag';
  }  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {            //si es id
    matchFunction = el => {              //matchFunction es una funcion que recibe un elemento y devuelve true o false
      return '#' + el.id === selector   //se compara el elemento html vs el selector
    }

  } else if (selectorType === "class") {     //si es class
    matchFunction = el => {                  //el es el elemento html
      var classes = el.classList;            //classList es una propiedad de los elementos html
      for (var i = 0; i < classes.length; i++) {      //recorre el array de clases
        if('.' + classes[i] === selector){  //si la clase del elemento html es igual al selector
        return true                         //retorna true
        }
      }
      return false;
    }
} else if (selectorType === "tag.class") {            //si es tag.class
    matchFunction = el => {                           //el es el elemento html
      var [tag, clase] = selector.split('.');         //separa el selector en tag y clase
      return matchFunctionMaker(tag)(el) && matchFunctionMaker('.' + clase)(el);    //retorna true si el elemento html es igual al tag y si el elemento html es igual a la clase
    }

  } else if (selectorType === "tag") {      //si es tag
    var matchFunction = el => {               //el es el elemento html
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());     //retorna true si el elemento html es igual al selector
    };
  }
  return matchFunction;
}
var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


