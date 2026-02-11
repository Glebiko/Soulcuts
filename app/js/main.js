const body = document.querySelector('body');
const headerBtn = document.querySelector('.header__btn');
const headerMenu = document.querySelector('.header__menu');
const openModalBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const toTopBtn = document.querySelector('.footer__logo')

const initLogoAnimation = () => {
  const container = document.querySelector('.main__shop-logo');

  if (!container) return;

  const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/soul-animation.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });
};


const initLogoDark = () => {
  const darkLogo = document.querySelector('.header__menu-logo');

  if (!darkLogo) return;

  lottie.destroy('logoDark')

  const darkAnimation = lottie.loadAnimation({
    name: 'logoDark',
    container: darkLogo,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'images/soulblack-animation2.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  });

  darkAnimation.setSpeed(1.2);
};


function toggleMenuActive() {
  if (!headerMenu) return;
  headerMenu.classList.toggle('menu--active');
  body.classList.toggle('scroll-lock');
}


function openMenuHandler(menuAction, animationAction) {
  menuAction();
  animationAction();
}

function openModal() {
  if (!modal) return;
  modal.classList.add('is-open');
  body.classList.add('scroll-lock');
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  body.classList.remove('scroll-lock');
}


document.addEventListener('DOMContentLoaded', initLogoAnimation);


headerBtn?.addEventListener('click', () => {
  openMenuHandler(toggleMenuActive, initLogoDark);
  headerBtn.classList.toggle('header__btn--open')
});

openModalBtn?.addEventListener('click', openModal);
modalOverlay?.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.remove('is-open')) {
    closeModal();
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
