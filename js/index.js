(function() {

  let keys = document.body.querySelectorAll('.key');

  document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    let key = document.body.querySelector(`.key[data-key="${keyCode}"]`);
    let audio = document.body.querySelector(`audio[data-key='${keyCode}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add('playing');
  });

  keys.forEach(key => {
    key.addEventListener('transitionend', function(e) {
      key.classList.remove('playing');
    });
  });

})();