window.onload = function () {
    var hamburger = document.querySelector('.hamburger');
    var navBar = document.querySelector('.nav-bar');
    var body = document.body;

    // Toggle Navbar on small screens
    hamburger.onclick = function (event) {
        event.stopPropagation();
        navBar.classList.toggle("active");
    };

    body.onclick = function () {
        if (navBar.classList.contains("active")) {
            navBar.classList.remove("active");
        }
    };

    // Dropdown functions
    function toggleDropdown() {
        const dropdown = document.querySelector('.custom-dropdown');
        dropdown.classList.toggle('active');
    }
    
    function selectOption(option) {
        document.getElementById('selected-option').innerText = option;
        document.querySelector('.custom-dropdown').classList.remove('active');
    }

    // Add event listeners for dropdown
    document.querySelector('.dropdown-selected').onclick = toggleDropdown;

    document.querySelectorAll('.dropdown-option').forEach(option => {
        option.onclick = function () {
            selectOption(option.innerText);
        };
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        const dropdown = document.querySelector('.custom-dropdown');
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}

// Popup Functions
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup() {
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
}

window.onclick = function(event) {
    const popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        if (event.target === popups[i]) {
            popups[i].style.display = 'none';
        }
    }
}

// Filter Functions
function filterSelection(category) {
    const boxes = document.querySelectorAll('.project-box');
    const buttons = document.querySelectorAll('.filter-buttons button');

    buttons.forEach((btn) => btn.classList.remove('active'));
    document.querySelector(`button[onclick="filterSelection('${category}')"]`).classList.add('active');

    boxes.forEach((box) => {
        if (category === 'all') {
            box.classList.remove('hidden');
        } else {
            if (box.classList.contains(category)) {
                box.classList.remove('hidden');
            } else {
                box.classList.add('hidden');
            }
        }
    });
}

// Image Slider Functions
let currentSlide = 0;

function changeSlide1(direction) {
    const slides = document.querySelectorAll('.slider-images-1 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-1');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide2(direction) {
    const slides = document.querySelectorAll('.slider-images-2 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-2');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide3(direction) {
    const slides = document.querySelectorAll('.slider-images-3 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-3');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide4(direction) {
    const slides = document.querySelectorAll('.slider-images-4 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-4');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide5(direction) {
    const slides = document.querySelectorAll('.slider-images-5 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-5');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide6(direction) {
    const slides = document.querySelectorAll('.slider-images-6 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-6');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide7(direction) {
    const slides = document.querySelectorAll('.slider-images-7 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-7');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}

function changeSlide8(direction) {
    const slides = document.querySelectorAll('.slider-images-8 .slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.opacity = 0;

    // Calculate the next slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the slider container to show the next slide
    const sliderContainer = document.querySelector('.slider-images-8');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Show the new slide
    slides[currentSlide].style.opacity = 1;
}
