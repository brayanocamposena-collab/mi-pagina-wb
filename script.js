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

const workGallery = document.getElementById("work-gallery");

const videosGallery = document.getElementById("videos-gallery");



// =========================
// OCULTAR TODO
// =========================

function hideAll(){

    postsGallery.classList.add("hidden");

    workGallery.classList.add("hidden");

    videosGallery.classList.add("hidden");

}



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

    hideAll();

    workGallery.classList.remove("hidden");

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
