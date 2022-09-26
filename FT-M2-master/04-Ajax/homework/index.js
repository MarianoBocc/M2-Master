
$("#boton").click( () => {               // Aasi llamamos al evento click con el id botón

    $.get("http://localhost:5000/amigos", function (data) {    //Mértodo get, para traer del DOM lo que quiero iterar, en este caso un arr de obj (data)
    $("#lista").empty();                                       // Seteamos el id lista en empty para que al hacer click no lo retorne todas las veces

        for (let i = 0; i < data.length; i++) {                // itera el arr
        let li = document.createElement('li');                 // crea una variable que será un elemento "li" (list item) dentro de lista

        li.innerHTML = data[i].name;                           // Se escribe adento del "li" el atributo nombre del objeto q está en esa posición del arr data
        $('#lista').append(li);                                // Pide q se traiga la variable li del id lista para mostrarla en el "li"
    }

    $("#img-carga").hide();                                    // Esto no tiene q ver con el ejercicio, solo esconde la animación de carga
    });
});


//ESTE EJERCICIO ESTÁ HECHO CON FETCH, ES OTRA FORMA DE HACERLO DIFERENTE A $

const inputAmigo = document.querySelector('#input');            // Guarda en diferentes consts el id input, search y amigo
const btnSearch = document.querySelector('#search');            
const spanAmigo = document.querySelector('#amigo');

btnSearch.addEventListener('click', function(e){                // la const btnSearch registra un evento click
    let idAmigo =inputAmigo.value;
fetch(`http://localhost:5000/amigos/${idAmigo}`)
.then (res => res.json())
.then (amigo => {
    spanAmigo.innerHTML = amigo.name;

})
})



const inputDelete = document.querySelector('#inputDelete');
const btnDelete = document.querySelector('#delete');
const spanDelete = document.querySelector('#success');

btnDelete.addEventListener('click', function(){
    let idAmigo =inputDelete.value;
fetch(`http://localhost:5000/amigos/${idAmigo}` , {
method: 'DELETE'
})
.then (res => res.json())
.then (()=> {
    spanDelete.innerHTML = 'Amigo borrado';

})
})





