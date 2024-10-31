const glassEffectDiv = document.getElementById('glassEffect');

    // Event listener for mouse movement
    document.addEventListener('mousemove', (e) => {
      // Get the mouse position
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Update the div's position to follow the mouse, adjusting for its center
      glassEffectDiv.style.left = `${mouseX - glassEffectDiv.offsetWidth / 2}px`;
      glassEffectDiv.style.top = `${mouseY - glassEffectDiv.offsetHeight / 2}px`;
    });