function cambiarTitulo() {
  console.log("desde la funcion cambiar titulo");
  // traer elemento del html - opcion 1 co querySelector
  //let titulo = document.querySelector("#tituloPrincipal");

  // traer elemento del html- opcion 2 con metodo getElementBy....
  // getElementById("un id de html")
  // getElment
  let titulo = document.getElementById("tituloPrincipal");
  console.log(titulo.className);
  titulo.className = "text-primary display-2";
}

function verMas() {
  let boton = document.getElementById("btnVerMas");
  // paso 1- buscar el padre
  let articulos = document.getElementsByTagName("article");
  if (boton.innerHTML === "ver mas...") {
    boton.innerHTML = "ocultar";
    boton.className = " btn btn-outline-danger";
    console.log("esde la funcion ver mas");
    // paso 1- buscar el padre

    console.log(articulos[1]);
    //paso 2 - crear el elemento <P>
    // forma 1
    // let parrafo = document.createElement("p"); //<P></p>
    // // paso 3 - agregar datos al elemento creado
    // parrafo.innerHTML =
    //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet ullam animi aperiam numquam rerum, minima asperiores ex quisquam maxime laborum. Similique sapiente, commodi quis nihil fuga praesentium iste culpa, maxime veritatis molestias itaque quisquam illum velit ullam esse laudantium impedit earum placeat dolorum beatae consequuntur minus cupiditate rerum ex";

    // parrafo.className = "lead";

    // console.log(articulos[1].children[1]);

    // // paso 4 - unir el elemento padre con el nodo hijo
    // //articulos[1].appendChild(parrafo); //agrega nodos hijos al final
    // articulos[1].insertBefore(parrafo, articulos[1].children[2]);

    //forma2
    articulos[1].innerHTML += `<p class="lead">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
    perferendis, doloremque iusto, rem mollitia unde consequatur officia
    rerum recusandae officiis culpa fugiat necessitatibus!
  </p>`;

    boton.innerHTML = "ocultar";
    boton.className = "btn btn-outline-danger";
  } else {
    console.log("aqui quiero eliminar el elemento hijo");
    console.log(articulos[1].children[2]);
    console.log(articulos[1].hasChildNodes());
    if (articulos[1].hasChildNodes() && articulos[1].children.length > 2) {
      // borrar un nodo hijo
      articulos[1].removeChild(articulos[1].children[2]);
      boton.innerHTML = "ver mas...";
      boton.className = "btn btn-outline-primary";
    }
  }
}
