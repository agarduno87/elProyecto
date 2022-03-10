let logo = document.getElementsByClassName('logo--light')[0];
let menuIcon = document.getElementsByClassName('menu-icon--light')[0];

window.onscroll = () => {
  if (window.scrollY > 550) {
    logo.src = '/images/logo--dark.png';
    logo.classList.add('logo--dark');
    menuIcon.classList.add('menu-icon--dark');
  } else {
      logo.src = '/images/logo--light.png';
      logo.classList.remove('logo--dark');
      menuIcon.classList.remove('menu-icon--dark');
  }
};
