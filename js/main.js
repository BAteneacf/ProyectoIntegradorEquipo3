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
<a class="nav-link active" aria-current="page" href="./nosotras.html">NOSOTROS</a>
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
<img src="./src/logo_vector_blanco_500x150.svg">
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



