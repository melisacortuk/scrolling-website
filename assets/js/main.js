/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-list');
/*===== MENU SHOW ====*/
document.querySelector('.nav-toggle').onclick = () => {
  navMenu.classList.toggle('show-menu');
}

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let life = document.querySelector('.life');
window.onscroll = function() {
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 3 + 'px';
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  life.style.fontSize = value + 'px';
  if (scrollY >= 67) {
    life.style.fontSize = 67 + 'px';
    life.style.position = 'fixed';
    if (scrollY >= 478) {
      life.style.display = 'none';
    } else {
      life.style.display = 'block';
    }
    if (scrollY >= 127) {
      document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
    } else {
      document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
    }
  }
}
