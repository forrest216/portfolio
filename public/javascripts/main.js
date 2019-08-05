$('document').ready(showLinks());

function showLinks() {
   const navLinks = [...document.getElementsByClassName('pop-down')];
   navLinks.forEach((link, idx) => {
      setTimeout(() => {link.setAttribute('style', 'top: 5vh')}, (idx + 2) * 500);
      setTimeout(() => {link.removeAttribute('style')}, 4000);
   });
}