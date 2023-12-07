//Variable que mantiene el estado visible del carrito
var carritoVisible = false;
let carrito;

//Espermos que todos los elementos de la pàgina cargen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function carritoVacio(){
  var carritoItems = document.getElementsByClassName('carrito')[0];
  carritoItems.innerHTML = `
    <div class="header-carrito">
      <h2>Tu Carrito Esta Vacio</h2>
    </div>
  `;
}

function ready(){

  let carritoTexto = localStorage.getItem("carrito");
  if( !carritoTexto ){
    carritoVacio();
    return;
  }
  carrito = JSON.parse(carritoTexto);
  if(carrito.total==0){
    carritoVacio();
    return;
  }
    //Agregremos funcionalidad a los botones eliminar del carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }

    //Agrego funcionalidad al boton sumar cantidad
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }

     //Agrego funcionalidad al buton restar cantidad
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }

    carrito.asesores.forEach(asesor => agregarItemAlCarrito(asesor)); 
    hacerVisibleCarrito();

    //Agregamos funcionalidad al botón comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
}
//Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    alert("Gracias por la compra");
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}


//Funcion que hace visible el carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carritoElement = document.getElementsByClassName('carrito')[0];
    carritoElement.style.marginRight = '0';
    carritoElement.style.opacity = '1';
}

//Funciòn que agrega un item al carrito
function agregarItemAlCarrito(asesor){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${asesor.img}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">Asesor: ${asesor.nombre}</span>
                <span class="carrito-item-titulo">Horario: ${asesor.horario}</span>
                <span class="carrito-item-precio">Precio: ${asesor.precio}</span>
                <input class="idAsesor" type='text' value='${asesor.id}' hidden='true'/>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    //Agregamos la funcionalidad eliminar al nuevo item
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    //Actualizamos total
    actualizarTotalCarrito();
}

//Elimino el item seleccionado del carrito
function eliminarItemCarrito(event){
  
    var buttonClicked = event.target;
    let element = buttonClicked.parentElement.parentElement;
    let id = Number(element.getElementsByClassName("idAsesor")[0].value);
    console.log(id);
    carrito.asesores = carrito.asesores.filter(a => a.id !== id);
    carrito.total -= 1;
    console.log(carrito.asesores);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    element.remove();
    //Actualizamos el total del carrito
    actualizarTotalCarrito();

    //la siguiente funciòn controla si hay elementos en el carrito
    //Si no hay elimino el carrito
    ocultarCarrito();
}
//Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        carritoVacio();
    }
}
//Actualizamos el total de Carrito
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    console.log(total);
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').split(":")[1]);
       
        total = total + precio;
        console.log(total, precio);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("mx") + ".00";

}