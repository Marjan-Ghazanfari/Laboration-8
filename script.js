const form = document.querySelector('.regForm');
const firstName = document.querySelector('#firstName');
const iFName = document.querySelector('#fName');
const lastName = document.querySelector('#lastName');
const iLName = document.querySelector('#lName');
const email = document.querySelector('#email');
const iEmail = document.querySelector('#iEmail');
const country = document.querySelector('#country');
const iCountry = document.querySelector('#iCountry');
const sex = document.querySelectorAll('input[name="gender"]');
const iSex = document.querySelector('#iSex');
const accept = document.querySelector('#accept');
const btn = document.querySelector('.btn');


const validateText = input => {
    if(input.value.trim() === '') {
      setError(input, 'Name cannot be empty');
      return false;
    } else if(input.value.trim().length < 2) {
      setError(input, 'Name must be atleast 2 characters long');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

  const validateEmail = input => {
    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(input.value.trim() === '') {
      setError(input, 'Email address cannot be empty');
      return false;
    }else if(!regEx.test(input.value)) {
      setError(input, 'Email address is not valid');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

const validateSelect = input => {
    if (input.value === 'Please select') {
      setError(input, 'You must choose your country');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
}

const validateRadio = input => {
    let gender = '';
    for (const s of input) {
      if (s.checked) {
        gender = s.value;
        iSex.innerHTML = gender;
      }
    }
    for (const s of input) {
      if (gender === '') {
        setError(s.parentElement, 'You must choose gender');
        return false; 
      } else {
        setSuccess(s.parentElement);
        return true;
      }
    }
    
  }

  const validateCheck = input => {
    if(!input.checked) {
      setError(input, 'You must accept the terms');
      return false;
    } else {
      setSuccess(input);
      return true;
    }
  }

  const setError = (input, message) => {
    const inputGroup = input.parentElement;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
  
    const error = inputGroup.querySelector('small');
    error.innerText = message;
  }
  
  const setSuccess = input => {
    const inputGroup = input.parentElement;
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
  }

form.addEventListener('submit', e => {
    //baraye inke ke dakhele safhe bemune vorudiha va pak nashe zoodi
    e.preventDefault();
    
    validateText(firstName);
    validateText(lastName);
    validateEmail(email);
    validateSelect(country);
    validateRadio(sex);
    validateCheck(accept);

    iFName.innerHTML = firstName.value;
    iLName.innerHTML = lastName.value;
    iEmail.innerHTML = email.value;
    iCountry.innerHTML = country.value;
    
});

// // vaghti mire rush range border fargh mikone
// firstName.addEventListener('focus', () => {
//     firstName.classList.add('focus');
//     // div1 = firstName.value;
// });
// // vaghti miad birun click mikone range border mishe mesle ghabl
// firstName.addEventListener('blur', () => {
//     firstName.classList.remove('focus');
// });
