const keys = document.querySelectorAll('.wrapper .key');
const sounds = document.getElementsByTagName('audio');
const topHat = document.querySelector('.top-hat');
const topBurger = document.querySelector('.top-b');

function addDefaultPosition() {
  topBurger.style.top = '164px';
}
//* remove rotate  top-hat
function removeRotate() {
  topHat.style.rotate = '-8deg';
}
function removeClass(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

keys.forEach(function (key, i) {
  //* Top burger
  key.addEventListener('transitionend', addDefaultPosition);
  //* Top hat
  key.addEventListener('transitionend', removeRotate);
  //* Keys transitions
  key.addEventListener('transitionend', removeClass);
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Key' + key.textContent) {
      sounds[i].currentTime = 0;
      sounds[i].play();
      key.classList.add('playing');
    }
    if (e.code === 'KeyE' || e.code === 'KeyR') topHat.style.rotate = '0deg';
    else if (e.code === 'KeyK') topBurger.style.top = '170px';
  });
});
