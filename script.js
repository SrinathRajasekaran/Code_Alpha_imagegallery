let currentIndex = 1;
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
showSlide(currentIndex);

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function currentSlide(n) {
    showSlide(currentIndex = n);
}

function showSlide(n) {
    let imageElement = document.getElementById("current-image");
    if (n > images.length) { currentIndex = 1 }
    if (n < 1) { currentIndex = images.length }
    imageElement.src = images[currentIndex - 1];
}

// Modal functionality
function openModal() {
    let modal = document.getElementById("imageModal");
    modal.style.display = "block";
    let modalImg = document.getElementById("modal-image");
    modalImg.src = document.getElementById("current-image").src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Auto-play functionality
let slideInterval = setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds

// Stop auto-play on modal open
document.getElementById("current-image").addEventListener('click', () => {
    clearInterval(slideInterval);
});
