const allButtonsElm = document.querySelectorAll('.btn');

let strToDisplay = '';

allButtonsElm.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.innerText;
    strToDisplay += value;
    console.log(strToDisplay);
  });
});
