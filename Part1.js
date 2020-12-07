
let button = document.getElementById('button');
let input = document.getElementsByClassName('input')

const info = {
    firstName: '',
    lastName: '',
    age: 0,
    password: '',
    confirmedPassword: ''
}


console.log(button);
button.addEventListener('click', pharseInput) 
function pharseInput() {
    console.log(input[0].value);
    info.firstName = input[0].value;
    info.lastName = input[1].value;
    info.age = input[2].value;
    info.password = input[3].value;
    info.confirmedPassword = input[4].value;
     if (info.confirmedPassword === input[3].value) {
         alert('Password Matched');
     } else {
         alert('Password not confirmed');
     }
    console.log(info);
}



  






