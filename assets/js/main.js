const dots = document.querySelector('.loading__dots');

const addAnimation = () => {
  dots.classList.add('animate');

  setTimeout(() => {
    dots.classList.remove('animate');

    setTimeout(() => {
      addAnimation();
    }, 100);
  }, 2600);
};

addAnimation();
