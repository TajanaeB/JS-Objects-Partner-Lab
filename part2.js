const driverLicense = {
    name: 'Kale Burd',
    DOB: '01/21/1995',
    maritalStatus: 'Married',
}

// document.getElementById('border').innerHTML = driverLicense;
let div = document.querySelector('#border');
let name = document.createElement('p');
let dob = document.createElement('p');
let status = document.createElement('p');


name.textContent = `Name: ${driverLicense.name}`;
div.appendChild(name);
dob.textContent = `DOB: ${driverLicense.DOB}`;
div.appendChild(dob);
status.textContent = `Marital Status: ${driverLicense.maritalStatus}`;
div.appendChild(status);

driverLicense.certification = 
driverLicense["cert"]= motorcycle;
console.log(driverLicense.cert);
