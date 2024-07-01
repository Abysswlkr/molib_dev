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
          setTimeout(type, 100); 
      } else {
          cursor.style.display = 'none'; 
      }
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(type, 500); 
              observer.unobserve(entry.target); 
          }
      });
  }, { threshold: 0.1 }); 

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


  //Crvice Project
  document.getElementById('link1').addEventListener('click', function() {
      window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });

  document.getElementById('web1').addEventListener('click', function() {
    window.open('https://crvice.vercel.app', '_blank');
  });


  


  //Outer Games Project
  document.getElementById('link2').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/OuterGamesWeb', '_blank');
  });

  document.getElementById('web2').addEventListener('click', function() {
    window.open('https://outer-games.vercel.app', '_blank');
  });

  //The witcher Enciclopedia
  document.getElementById('link3').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/The_Witcher_Enciclopedia', '_blank');
  });

  document.getElementById('web3').addEventListener('click', function() {
    window.open('https://the-witcher-enciclopedia.vercel.app', '_blank');
  });
  

  document.getElementById('link4').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/Tetris_game', '_blank');
  });

  document.getElementById('web4').addEventListener('click', function() {
    window.open('https://tetris-game-pearl.vercel.app/', '_blank');
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


