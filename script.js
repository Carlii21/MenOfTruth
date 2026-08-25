// ===== GALLERY LIGHTBOX ===== 

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        // Create lightbox
        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        // Create enlarged image
        const enlargedImage = document.createElement("img");
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        // Create close button
        const closeButton = document.createElement("button");
        closeButton.className = "lightbox-close";
        closeButton.innerHTML = "&times;"

        // Put everything together
        
        lightbox.appendChild(closeButton);
        lightbox.appendChild(enlargedImage);

        // Put lightbox on the page
        document.body.appendChild(lightbox);

        // Close button

        closeButton.addEventListener("click", function () {
            lightbox.remove();
        });

        // Close when clicking the dark background

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});

// ===== MOBILE NAVIGATION =====

document.addEventListener("DOMContentLoaded", function() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function() {

            navLinks.classList.toggle("active");
        });

        const navigationLinks = document.querySelectorAll(".nav-links a");

        navigationLinks.forEach(function(link) {

            link.addEventListener("click", function() {

                navLinks.classList.remove("active");
            });
        });
    }
    });