//navbar
let nav = document.getElementsByTagName("nav").item(0);
nav.className = "navbar navbar-expand-md bg-body-tertiary";

let div = document.createElement("div");
div.className = "container-fluid";
nav.prepend(div);

div.insertAdjacentHTML("beforeend",`<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand" href="./index.html">
<img src="./src/logo_vector_500x150.svg" alt="logo Baby Devs" height="35">
</a>`);

let divInner = document.createElement("div");
divInner.className="collapse navbar-collapse";
divInner.id="navbarTogglerDemo03";
div.insertAdjacentElement("beforeend", divInner);

let ul1 = document.createElement("ul");
ul1.className = "navbar-nav ms-auto mb-2 mb-lg-0";
divInner.append(ul1);


ul1.insertAdjacentHTML("beforeend", `<li class="nav-item">
<a class="nav-link active" aria-current="page" href="./index.html">INICIO</a>
</li>`);
ul1.insertAdjacentHTML("beforeend", `<li class="nav-item">
<a class="nav-link active" aria-current="page" href="./asesores.html">ASESORES</a>
</li>`);

ul1.insertAdjacentHTML("beforeend", `<li class="nav-item">
<a class="nav-link active" aria-current="page" href="./nosotros.html">NOSOTROS</a>
</li>`);
ul1.insertAdjacentHTML("beforeend", `<li class="nav-item">
<a class="nav-link active" aria-current="page" href="./contacto.html">CONTÁCTANOS</a>
</li>`);
ul1.insertAdjacentHTML("beforeend", `<li class="nav-item">
<a class="nav-link active" aria-current="page" href="./perfilusuario.html">
    <img src="./src/usuario.svg" alt="perfil icono" height="20px">
</a>
</li>`);
ul1.insertAdjacentHTML("beforeend", `<li class="nav-item">
<a class="nav-link active" aria-current="page" href="./carrito.html">
    <img src="./src/carrito-de-compras.svg" alt="carrito icono" height="20px">
</a>
</li>`);
//fin del navbar


//footer
let foot = document.getElementsByClassName("container text-center").item(0);
foot.className = "container text-center";

let footer_div = document.createElement("div");
footer_div.className = "row";
foot.append(footer_div);

footer_div.insertAdjacentHTML("beforeend",`
<div class="col">
<a href="#">Derechos de Autor</a>
<a href="#">Aviso de Privacidad</a>
<p>Derechos reservados BaByDevs</p>
</div>
`);

footer_div.insertAdjacentHTML("beforeend",`
<div class="col">
<img src="./src/logo_vector_500x150.svg">
</div>
`);

footer_div.insertAdjacentHTML("beforeend",`
<div class="col">
<a href="#"><img src="./src/facebook.png" alt="logo facebook"></a>
<a href="#"><img src="./src/instagram.png" alt="logo instagram"></a>
<a href="#"><img src="./src/linkedin.png" alt="logo linkedin"></a>
<a href="#"><img src="./src/tik-tok.png" alt="logo tiktok"></a>
</div>
`);

//footer


////MAIN ASESORES--- NO MOVER POR FAVOR
document.addEventListener("DOMContentLoaded", function () {
    function addItem(item) {
      const itemHTML = `<div class="card" style="width: 18rem; padding: 10px style= "object-fit:contain; padding:5px">
          <img src="${item.img}" class="card-img-top" alt="image">
          <div class="card-body">
              <h5 class="card-title" style="text-align: center">${item.name}</h5>
              <p class="card-text" style="text-align: center">${item.description}</p>
              <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${item.id}" style="margin-bottom:1rem; padding:25px; border:200px">+</a>
          </div>
      </div>
      <br/>`;
  
      const itemsContainer = document.getElementById("list-items");
      itemsContainer.innerHTML += itemHTML;
    }
  
    // Agrega las tarjetas
    addItem({
        'name': 'Lizeth Bravo Acevedo',
        'img':'./src/Lizy.png',
        'description': 'HTML5 y CSS3',
        'id': 1  // Debe coincidir con el "id" del modal
      });
      addItem({'name':'Ana Cristina Hernández',
      'img':'./src/Ana_Cris.png',
      'description':'HTML5 y CSS3',
      'id': 2
    });
  
  addItem({'name':'Jessica L. Olivera',
      'img':'./src/lucero.png',
      'description':'HTML5, CSS3 y Java',
      'id': 3
    });
  
  addItem({'name':'Alma G. Martínez',
      'img':'./src/Alma.png',
      'description':'CSS3, y Trello',
      'id': 4
    });
  
  addItem({'name':'Amalia Elizalde',
      'img':'./src/lia.png',
      'description':'Bootstrap, Trello y Java',
      'id': 5
    });
  
  addItem({'name':'Areli Moreno',
      'img':'./src/Areli.png',
      'description':'Javascript, CSS3 y Figma',
      'id': 6
    });
  
  addItem({'name':'Abril Fernández',
      'img':'./src/Abril.png',
      'description':'HTML5 y Java',
      'id': 7
    });
  
  addItem({'name':'Alejandra Lemus',
      'img':'./src/Alejandra.png',
      'description':'HTML5 y CSS3',
      'id': 8
    });
  
  addItem({'name':'Rosa Pérez',
      'img':'./src/Rosa.png',
      'description':'HTML5 y CSS3',
      'id': 9
    });
  
  addItem({'name':'Jazmín Corona',
      'img':'./src/Jaz.jpg',
      'description':'HTML5 y CSS3',
      'id': 10
    });

  
   
   
    // Define el contenido del modal para el primer item
    const modalItem1 = {
      'id': 1,
      'title': 'Lizeth Bravo Acevedo',
      'img':'./src/Lizy.png',
      'description': 'Contenido del modal 1',
    };
  
    // Define el contenido del modal para el segundo item
    const modalItem2 = {
      'id': 2,
      'title': 'Ana Cristina Hernández',
      'description': 'Contenido del modal 2'
    };

    // Define el contenido del modal para el tercero item
    const modalItem3 = {
        'id': 3,
        'title': 'Jessica L. Olivera',
        'description': 'Contenido del modal 3'
      };

    // Define el contenido del modal para el cuarto item
    const modalItem4 = {
        'id': 4,
        'title': 'Alma G. Martínez',
        'description': 'Contenido del modal 4'
      };

    // Define el contenido del modal para el quinto item
    const modalItem5 = {
        'id': 5,
        'title': 'Amalia Elizalde',
        'description': 'Contenido del modal 5'
      };

    // Define el contenido del modal para el sexto item
    const modalItem6 = {
        'id': 6,
        'title': 'Areli Moreno',
        'description': 'Contenido del modal 6'
      };

    // Define el contenido del modal para el septimo item
    const modalItem7 = {
        'id': 7,
        'title': 'Abril Fernández',
        'description': 'Contenido del modal 7'
      };

    // Define el contenido del modal para el octavo item
    const modalItem8 = {
        'id': 8,
        'title': 'Alejandra Lemus',
        'description': 'Contenido del modal 8'
      };

    // Define el contenido del modal para el noveno item
    const modalItem9 = {
        'id': 9,
        'title': 'Rosa Pérez',
        'description': 'Contenido del modal 9'
      };

    // Define el contenido del modal para el decim0 item
    const modalItem10 = {
        'id': 10,
        'title': 'Jazmín Corona',
        'description': 'Contenido del modal 10'
      };
  
    // Agrega los modales al final del documento
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML= `

      <!-- Modal 1 -->
      <div class="modal fade" id="exampleModal_1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem1.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Lizy.png" style="heigth:250px; width:250px">
              ${modalItem1.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 1 -->

      <!-- Modal 2 -->
      <div class="modal fade" id="exampleModal_2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem2.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Ana_Cris.png" style="heigth:230px; width:250px">
              ${modalItem2.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 2 -->

      <!-- Modal 3 -->
      <div class="modal fade" id="exampleModal_3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem3.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/lucero.png" style="heigth:230px; width:250px">
              ${modalItem3.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 3 -->

      <!-- Modal 4 -->
      <div class="modal fade" id="exampleModal_4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem4.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Alma.png" style="heigth:230px; width:250px">
              ${modalItem4.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 4 -->

      <!-- Modal 5 -->
      <div class="modal fade" id="exampleModal_5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem5.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/lia.png" style="heigth:230px; width:250px">
              ${modalItem5.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 5 -->

      <!-- Modal 6 -->
      <div class="modal fade" id="exampleModal_6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem6.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Areli.png" style="heigth:230px; width:250px">
              ${modalItem6.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 6 -->

      <!-- Modal 7 -->
      <div class="modal fade" id="exampleModal_7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem7.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Abril.png" style="heigth:230px; width:250px">
              ${modalItem7.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 7 -->

      <!-- Modal 8 -->
      <div class="modal fade" id="exampleModal_8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem8.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Alejandra.png" style="heigth:230px; width:250px">
              ${modalItem8.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 8 -->


      <!-- Modal 9 -->
      <div class="modal fade" id="exampleModal_9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem9.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Rosa.png" style="heigth:230px; width:250px">
              ${modalItem9.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 9 -->
  
      <!-- Modal 10 -->
      <div class="modal fade" id="exampleModal_10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${modalItem10.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class "modal-body">
            <img src="./src/Jaz.jpg" style="heigth:230px; width:250px">
              ${modalItem10.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Agregar asesoría</button>
            </div>
          </div>
        </div>
      </div> <!-- Modal 10 -->
    `;
  });
