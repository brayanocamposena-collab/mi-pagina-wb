// =========================
// BOTONES
// =========================

const btnStart = document.getElementById("btn-start");

const btnFolder = document.getElementById("btn-folder");

const btnManual = document.getElementById("btn-manual");

const btnContact = document.getElementById("btn-contact");



// =========================
// GALERÍAS
// =========================

const postsGallery = document.getElementById("posts-gallery");



// =========================
// OCULTAR TODO
// =========================


// =========================
// INICIO
// =========================

btnStart.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// =========================
// PORTAFOLIO
// =========================

btnFolder.addEventListener("click", () => {

    document
    .getElementById("posts-gallery")
    .scrollIntoView({

        behavior: "smooth"

    });

});



// =========================
// MANUAL
// =========================

btnManual.addEventListener("click", () => {

    document
    .getElementById("manual-section")
    .scrollIntoView({

        behavior: "smooth"

    });

});



// =========================
// CONTACTOS
// =========================

btnContact.addEventListener("click", () => {

    document
    .getElementById("contact-section")
    .scrollIntoView({

        behavior: "smooth"

    });

});

// =========================
// MODAL EXPANDIBLE
// =========================

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const closeBtn = document.querySelector(".close");



// TODAS LAS IMÁGENES

const posts = document.querySelectorAll(".post img");



// ABRIR MODAL

posts.forEach(post => {

    post.addEventListener("click", () => {

        modal.classList.add("active");

        modalImg.src = post.src;

    });

});



// CERRAR MODAL

closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});



// CERRAR HACIENDO CLICK FUERA

modal.addEventListener("click", (e) => {

    if(e.target !== modalImg){

        modal.classList.remove("active");

    }

});
