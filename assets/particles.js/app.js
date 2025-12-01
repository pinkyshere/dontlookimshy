// Make sure the container always fills screen and stays centered
document.addEventListener("DOMContentLoaded", () => {
  const pc = document.getElementById("particles-container");
  if (pc) {
    pc.style.position = "fixed";
    pc.style.top = "0";
    pc.style.left = "0";
    pc.style.width = "100vw";
    pc.style.height = "100vh";
    pc.style.margin = "0";
    pc.style.padding = "0";
    pc.style.zIndex = "-1"; // stays behind your content
  }
});

// Responsive particles settings
const isMobile = window.innerWidth < 768;

particlesJS('particles-container', {
  "particles": {
    "number": {
      "value": isMobile ? 40 : 80,         // lower density for mobile
      "density": {
        "enable": true,
        "value_area": isMobile ? 500 : 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
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
      "value": 0,
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
      "distance": 189,
      "color": "#ff0000",
      "opacity": 0.4,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": isMobile ? 2 : 5,          // slower for mobile
      "direction": "top",
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
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.55,
        "opacity": 0.45,
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
