/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggle the 'show-menu' class on the navigation menu
            nav.classList.toggle('show-menu');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*==================== SWIPER JS ====================*/
const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
});

const galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,
    thumbs: {
        swiper: galleryThumbs
    }
});

/*==================== POPUP ====================*/
const btnOpenVideo = document.querySelectorAll('.islands__video-content');
const islandsPopup = document.getElementById('popup');

function openPopup() {
    islandsPopup.classList.add('show-popup');
}

btnOpenVideo.forEach(btn => btn.addEventListener('click', openPopup));

const btnCloseVideo = document.getElementById('popup-close');

btnCloseVideo.addEventListener('click', () => {
    islandsPopup.classList.remove('show-popup');
});

/*==================== SCROLL TO SECTION ====================*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1); // Get the target section id

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Calculate the offset of the target section relative to the viewport
            const offsetTop = targetSection.offsetTop;

            // Smooth scroll to the target section
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close the menu if it's open (optional)
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('show-menu')) {
                navMenu.classList.remove('show-menu');
            }
        }
    });
});
