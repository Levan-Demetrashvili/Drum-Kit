const keys = document.querySelectorAll('.wrapper .key');
const sounds = document.getElementsByTagName('audio');
const topHat = document.querySelector('.top-hat');
const topBurger = document.querySelector('.top-b');

function rotateHat(e) {
  e.style.transfrom = 'rotate(';
}
function removeClass(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('transitionend', removeClass);
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Key' + keys[i].textContent) {
      sounds[i].currentTime = 0;
      sounds[i].play();
      keys[i].classList.add('playing');
    }
  });
}
