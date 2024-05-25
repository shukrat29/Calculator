const allButtonsElm = document.querySelectorAll('.btn');

let strToDisplay = '';
const displayElm = document.querySelector('.display');

const buttonAction = (value) => {
  strToDisplay += value;
  display(strToDisplay);
};

allButtonsElm.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str;
};
