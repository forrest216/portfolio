$('document').ready(showLinks());

function showLinks() {
   const navLinks = [...document.getElementsByClassName('pop-down')];
   navLinks.forEach((link, idx) => {
      const i = idx + 2;
      setTimeout(() => {link.setAttribute('style', 'top: 5vh')}, i * 500);
      setTimeout(() => {link.removeAttribute('style')}, 4000);
   });
}