const formEL = document.querySelector('.login-form');

const logInInfo = {};

formEL.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заповніть всі поля!!!');
  }

  logInInfo.email = email.value;
  logInInfo.password = password.value;

  console.log(logInInfo);
  event.currentTarget.reset();
});
