const contenedor = document.getElementById("contenedorGaleria");
const input = document.getElementById("imageInput");
const btnAgregar = document.getElementById("addBtn");
const btnEliminar = document.getElementById("deleteBtn");

let imagenSeleccionada = null;

const imagenesIniciales = [
    "assets/img/perrito1.jpg",
    "assets/img/perrito2.jpg",
    "assets/img/perrito3.jpg"
];

imagenesIniciales.forEach(url => agregarImagen(url));

function agregarImagen(url) {
    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        document.querySelectorAll("#contenedorGaleria img").forEach(i => {
            i.classList.remove("imagen-seleccionada");
        });
        img.classList.add("imagen-seleccionada");
        imagenSeleccionada = img;
    });

    contenedor.appendChild(img);
}

btnAgregar.addEventListener("click", () => {
    if (input.value !== "") {
        agregarImagen(input.value);
        input.value = "";
    }
});

btnEliminar.addEventListener("click", () => {
    if (imagenSeleccionada) {
        contenedor.removeChild(imagenSeleccionada);
        imagenSeleccionada = null;
    }
});