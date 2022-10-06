const nameUser = prompt('What is your name ?');
const surnameUser = prompt('What is your surname ?');
const colorUser = prompt('What is your favourite color ?');
let ageUser = prompt('How old are you ?');

let somma = nameUser + surnameUser + colorUser + ageUser;
document.getElementById("demo").innerHTML = somma;