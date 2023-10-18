/*menu desplegable*/ 
let boton = document.querySelector(".menu_icon");
let contenedor = document.querySelector(".navbar");
let enlacesAncla = document.querySelectorAll(".navbar a");

boton.addEventListener("click",()=>{

    contenedor.classList.toggle("show");
})

enlacesAncla.forEach(enlace=>
  {
    enlace.addEventListener("click",()=>
    {
      contenedor.classList.remove("show");
    })
  })


//gliderjs, galeria
window.addEventListener('load', function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            }
          ]

    });
});

/*ScrollReveal*/

const sr = ScrollReveal(
  {
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: false
  }); 

sr.reveal('.option__container',{delay:50}); 
sr.reveal('.img__container',{delay:50});
sr.reveal('.txt__container',{delay:50});
sr.reveal('.title_menu',{delay:50});
sr.reveal('.grid_menu_container',{delay:50});
sr.reveal('.txt__galery',{delay:50});
sr.reveal('.carousel',{delay:50});



