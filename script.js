const buttonNames = ["about", "skills", "projects", "contact"];
const buttons = [];

buttonNames.forEach(function(button) {
  buttons.push(document.getElementById(button))
});

const buttonColorChange = event => {
  event.target.style.color = 'white';
};
const buttonColorReturn = event => {
  event.target.style.color = '';
};

const buttonInterecation = button => {
  button.addEventListener('mouseenter', buttonColorChange);
  button.addEventListener('mouseleave', buttonColorReturn);
}

buttons.forEach(button => buttonInterecation(button));

floating_text = () =>{
let element = document.getElementById("float");
    element.classList.remove("text");

}