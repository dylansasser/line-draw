window.addEventListener("DOMContentLoaded", function () {
    let stroke = document.querySelector('.squiggle');
    
    if (!stroke) {
      console.error("No element with class 'squiggle' found.");
      return;
    }
  
    stroke.classList.add("draw");
  
    let strokeLength = stroke.getTotalLength();
    console.log(strokeLength);
  
    let sElement = document.getElementById('S');
    if (sElement) {
      sElement.style.setProperty('--stroke-length', strokeLength);
    }
  });