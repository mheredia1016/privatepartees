const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

function updateHeader(){
  if(header) header.classList.toggle('scrolled', window.scrollY > 30);
}
updateHeader();
window.addEventListener('scroll', updateHeader);

if(menuToggle && menu){
  menuToggle.addEventListener('click', () => menu.classList.toggle('open'));
}

const slider = document.querySelector('[data-slider]');
if(slider){
  const slides = [...slider.querySelectorAll('[data-slide]')];
  const dots = [...slider.querySelectorAll('[data-dot]')];
  let current = 0;
  let timer;

  function showSlide(index){
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    restart();
  }
  function restart(){
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 6500);
  }
  slider.querySelector('[data-next]')?.addEventListener('click', () => showSlide(current + 1));
  slider.querySelector('[data-prev]')?.addEventListener('click', () => showSlide(current - 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
  restart();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('[data-venue-slider]').forEach((slider) => {
  const slides = slider.querySelectorAll('img');
  let index = 0;

  if (slides.length <= 1) return;

  slides[0].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
});
