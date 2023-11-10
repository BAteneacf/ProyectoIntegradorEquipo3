document.querySelector("#btnAgregar-form").addEventListener("click", btnAgregar-form);

function saveAsessor(){
    const sId = document.querySelector("#txtId").value,
        sNom = document.querySelector("#txtNom").value,
        sAdd = document.querySelector("#txtAdd").value,
        sAdi = document.querySelector("#txtAdi").value,
        sHor = document.querySelector("#txtHor").value;

        addAsessorSystem(sNom, sAdd, sAdi, sHor);       
}

