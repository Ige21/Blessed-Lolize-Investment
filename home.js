function openMenu()  {
    document.getElementById("mobileMenu").classList.add("open")
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open")
}

const toggle = document.querySelector('.dropdown-toggle');
const submenu = document.querySelector('.submenu');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    submenu.style.display =
     submenu.style.display === 'block' ? 'none' : 'block';
})

// product
const heroTitle = document.querySelector(".hero-title");

const heroObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      heroTitle.classList.add("hero-show");
    }
  },
  { threshold: 0.6 }
);

heroObserver.observe(heroTitle);


// about us
const images = [
  "img/about img.png",
  "img/product img 5.png"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");

document.getElementById("nextSlide").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
});

document.getElementById("prevSlide").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
});
