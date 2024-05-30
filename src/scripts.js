//Scrollspy landing 
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

//Cursor light
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

const root = document.documentElement;

function updateLight() {
    const currentX = parseFloat(getComputedStyle(root).getPropertyValue('--cursorX') || cursorX);
    const currentY = parseFloat(getComputedStyle(root).getPropertyValue('--cursorY') || cursorY);
    
    const newX = currentX + (cursorX - currentX) * 0.1; // Ajusta el factor para más o menos retardo
    const newY = currentY + (cursorY - currentY) * 0.1;

    root.style.setProperty('--cursorX', `${newX}px`);
    root.style.setProperty('--cursorY', `${newY}px`);

    requestAnimationFrame(updateLight);
}

updateLight();

//portofilio animation entrance
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Dejar de observar después de hacer visible
          }
      });
  });

  const container = document.querySelector('.container-content-portfolio');
  if (container) {
      observer.observe(container);
  }
});

//about me text entrance
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Dejar de observar después de hacer visible
          }
      });
  });

  const aboutMe = document.querySelector('.about-me');
  if (aboutMe) {
      observer.observe(aboutMe);
  }
});


//solanum text effect entrance
document.addEventListener('DOMContentLoaded', function() {
  const text = '"Podríamos no tener mucho en común, tú y yo. Aun así, te considero un amigo"';
  const textContainer = document.querySelector('.typewriter-text');
  const cursor = document.querySelector('.typewriter-cursor');
  let index = 0;

  function type() {
      if (index < text.length) {
          textContainer.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100); // Ajusta la velocidad de la escritura aquí
      } else {
          cursor.style.display = 'none'; // Oculta el cursor al finalizar
      }
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(type, 500); // Retraso inicial antes de comenzar a escribir
              observer.unobserve(entry.target); // Deja de observar una vez que la animación comienza
          }
      });
  }, { threshold: 0.1 }); // Ajusta el umbral según sea necesario

  observer.observe(document.querySelector('.container-solanum'));
});




//Particles.JS library
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1300,
        }
      },
      "color": {
        "value": "#191919"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  //Redirections
  document.getElementById('rect1').addEventListener('click', function() {
      window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });

  document.getElementById('rect2').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/OuterGamesWeb', '_blank');
  });

  document.getElementById('rect3').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/The_Witcher_Enciclopedia', '_blank');
  });

  document.getElementById('rect4').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });

  document.getElementById('rect5').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });
  
  document.getElementById('rect6').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });


  //about me images


