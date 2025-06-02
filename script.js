const themeToggle = document.getElementById('theme-toggle');
const navLinks = document.getElementById('nav-links');
const menuBtn = document.getElementById('menu-btn');

// Toggle dark/light mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.innerHTML = document.body.classList.contains('dark') 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Toggle navbar in mobile
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function moveToSlide(index) {
  currentSlide = index;
  const slideWidth = document.querySelector('.card').offsetWidth + 30;
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % dots.length;
  moveToSlide(currentSlide);
}, 10000);
