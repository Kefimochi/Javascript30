function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
  }

  function playSound(isClick, e) {
    if (isClick === true) {
      let target = e.currentTarget;
      target.classList.add('playing');

      for (let i = 0; i < keys.length; i++) {
         if (target.dataset.key === keys[i].dataset.key) {
           const audio = document.querySelector(`audio[data-key="${keys[i].dataset.key}"]`);
           audio.currentTime = 0;
           audio.play();
       }
      }
    }
    
    if (isClick === false) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      
       if (!audio) return;
       key.classList.add('playing');
       audio.currentTime = 0;
       audio.play();
    }
  }
  const keys = document.querySelectorAll('.key');
    //Since keys is an array, can't just call addEventListener
    //Instead, for each key add an event listener
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener('mousedown',function(e) {
    playSound(true, e);
}));
  window.addEventListener('keydown', function(e) {
    playSound(false, e);
});
