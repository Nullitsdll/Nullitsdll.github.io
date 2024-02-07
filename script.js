document.addEventListener("DOMContentLoaded", function() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "star",
          stroke: {
            width: 0,
            color: "#ffffff"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      },
      retina_detect: true
    });
  });
  
  const discordLink = document.getElementById('discordLink');

  discordLink.addEventListener('mouseover', () => {
      discordLink.title = "nullx64"; // Cambia esto con tu nombre de Discord real
  });
  
  discordLink.addEventListener('mouseout', () => {
      discordLink.title = "nullx64"; // Restablece el título al salir del enlace
  });

  function copyToClipboard() {
    // Selecciona el contenido que deseas copiar
    const textToCopy = "nullx64"; // Reemplaza con tu nombre de Discord

    // Crea un elemento de texto oculto
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;

    // Añade el elemento al DOM
    document.body.appendChild(tempTextArea);

    // Selecciona y copia el texto al portapapeles
    tempTextArea.select();
    document.execCommand('copy');

    // Elimina el elemento de texto temporal
    document.body.removeChild(tempTextArea);

    // Cambia el texto del cartel a "Copiado en el portapapeles"
    const discordInfo = document.getElementById('discordInfo');
    discordInfo.textContent = 'Copied to Clipboard';

    // Puedes ajustar el tiempo que permanece el mensaje antes de volver al original (en milisegundos)
    const resetTime = 1000; // 3 segundos

    // Después de un tiempo, vuelve al texto original
    setTimeout(() => {
        discordInfo.textContent = 'nullx64'; // Reemplaza con tu nombre de Discord
    }, resetTime);
}
