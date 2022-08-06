const validationInputEl = document.querySelector('#validation-input');

function validationHandler(event) {
  if (event.currentTarget.value.length == validationInputEl.dataset.length) {
    if (validationInputEl.classList.contains('invalid')) {
      validationInputEl.classList.remove('invalid');
      validationInputEl.classList.add('valid');
    } else {
      validationInputEl.classList.add('valid');
    }
  } else {
    if (validationInputEl.classList.contains('valid')) {
      validationInputEl.classList.remove('valid');
      validationInputEl.classList.add('invalid');
    } else {
      validationInputEl.classList.add('invalid');
    }
  }
}

validationInputEl.addEventListener('blur', validationHandler);
