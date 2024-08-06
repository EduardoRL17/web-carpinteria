// Función para la presentación de diapositivas en la página de inicio
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.opacity = 1;
    }
    setTimeout(showSlides, 5000); // Cambia imagen cada 5 segundos
}

// Función para el carrusel en la galería
let carouselIndex = 0;
showCarouselSlides(carouselIndex);

function moveCarouselSlide(n) {
    showCarouselSlides(carouselIndex += n);
}

function showCarouselSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (n >= slides.length) {
        carouselIndex = 0;
    } else if (n < 0) {
        carouselIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[carouselIndex]) {
        slides[carouselIndex].style.display = "block";
    }
}

// Función para hacer que los servicios aparezcan paulatinamente
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    let delay = 0;

    serviceItems.forEach((item) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, delay);
        delay += 300; // 300ms de delay entre cada item
    });
});
