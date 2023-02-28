document.addEventListener(`DOMContentLoaded`, () => {
  const hamburgerButton = document.querySelector(`#hamburger`);
  const menuCloseButton = document.querySelector(`#menuClose`);
  const menu = document.querySelector(`.slideOutNav`);

  hamburgerButton.addEventListener(`click`, (event) => {
    menu.classList.add(`open`);
  });

  menuCloseButton.addEventListener(`click`, (event) => {
    menu.classList.remove(`open`);
  });
});
