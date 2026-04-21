let currentIndex;
const images = document.querySelectorAll('.img_gallery img');
const lightbox = document.getElementById('lightbox');
const expandedImg = document.getElementById('expandedImg');
const imgText = document.getElementById('imgtext');

function openLightbox(element, index) {
    lightbox.style.display = 'flex';
    currentIndex = index;
    updateLightboxImage(element.src, element.alt);
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function updateLightboxImage(src, alt) {
    expandedImg.src = src;
    imgText.innerHTML = alt;
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= images.length) {
        currentIndex = 0; // Loop back to the first image
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1; // Loop back to the last image
    }

    const newImage = images[currentIndex];
    updateLightboxImage(newImage.src, newImage.alt);
}

// Optional: Close the lightbox when clicking the overlay (not the image)
lightbox.addEventListener('click', function(e) {
    if (e.target !== expandedImg && e.target !== imgText && !e.target.closest('.prev') && !e.target.closest('.next')) {
        closeLightbox();
    }
});

// Optional: Keyboard navigation (left/right arrows)
document.addEventListener('keydown', function(e) {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});