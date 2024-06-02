//Loader
window.addEventListener('load', function () {
  // Ensure the preloader is shown for at least 10 seconds
  setTimeout(function () {
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';

      const content = document.getElementById('content');
      content.classList.remove('hidden');
      content.classList.add('visible');
  }, 2000); 
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


  //Redirections
  document.getElementById('redirect-github').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr', '_blank');
  });
  document.getElementById('redirect-linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/molivaresb/', '_blank');
  });
  document.getElementById('redirect-x').addEventListener('click', function() {
    window.open('https://twitter.com/Abysswlkr_', '_blank');
  });


  document.getElementById('link1').addEventListener('click', function() {
      window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });

  document.getElementById('link2').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/OuterGamesWeb', '_blank');
  });

  document.getElementById('link3').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/The_Witcher_Enciclopedia', '_blank');
  });

  //Download CV
  function downloadCV() {
    const url = 'assets/pdf/OLIVARES-BUENO-MIGUEL-CV.pdf';
    
    const enlace = document.createElement('a');
    enlace.href = url;
    
    enlace.setAttribute('download', 'OLIVARES-BUENO-MIGUEL-CV.pdf');
    
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}


