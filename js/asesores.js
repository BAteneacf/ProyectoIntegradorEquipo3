function modalFormat (info) {
  return `
    <!-- Modal ${info.id} -->
      <div class="modal fade" id="exampleModal_${info.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${info.name}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="${info.img}" style="heigth:250px; width:250px">
              ${info.description}
            </div>
            <div class="modal-footer">
              <button type="button" onclick="agregarACarrito(${info.id}, '${info.name}', '${info.img}')" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal ${info.id} -->
    `;
}

function addItem(item) {
  const itemHTML = `<div class="card" style="width: 18rem; padding: 10px; margin-bottom: 30px; margin-right: 20px; style= "object-fit:contain; padding:5px">
          <img src="${item.img}" class="card-img-top" alt="image">
          <div class="card-body">
              <h5 class="card-title" style="text-align: center">${item.name}</h5>
              <p class="card-text" style="text-align: center">${item.description}</p>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${item.id}" style="margin-bottom:1rem; padding:25px; border:200px;">Ver más</a>
          </div>
      </div>
      <br/>`;

  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

function agregarACarrito(id, nombre, img){
  let carritoTexto = localStorage.getItem("carrito");
  let carrito;
  if(!carritoTexto){
    carrito = {asesores:[],total:0};
  }else{
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }
  carrito.asesores.push({id,nombre,img});
  localStorage.setItem("carrito",JSON.stringify(carrito));
}



///MAIN ASESORES--- NO MOVER POR FAVOR
document.addEventListener("DOMContentLoaded", function () {

  listaAsesores.forEach(a => addItem(a));

  // Agrega los modales al final del documento
  const modalContainer = document.getElementById("modal-container");


  let modalContent = "";

  listaAsesores.forEach(modalInfo => {
    modalContent += modalFormat(modalInfo);
  });

  modalContainer.innerHTML = modalContent;
});
