const hamburgerElm = document.querySelector('.hamburger');
const hamburgerContent = document.querySelector('.hamburger__content');

const toggleMenu = () => {
  if (hamburgerContent.classList.contains('active')) {
    hamburgerContent.classList.remove('active');
  } else {
    hamburgerContent.classList.add('active');
  }
  console.log('funguju');
};

hamburgerElm.addEventListener('click', toggleMenu);
