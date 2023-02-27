const btnMobile = document.querySelector('.btn-mobile');
const body = document.querySelector('body')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
  body.classList.toggle('no-scroll')
  
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Slider

$(function(){
  $(".carrosel-itens").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ],
  });
});

//