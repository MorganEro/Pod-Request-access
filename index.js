// Path: index.js
const form = document.querySelector('form'),
  email = document.querySelector('input[type="email"]'),
  error = document.querySelector('.form-error');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '') {
    error.style.display = 'block';
    error.innerHTML = 'Oops! Please add your email';
  } else {
    error.style.display = 'none';
    error.innerHTML = '';
  }
});
email.addEventListener('invalid', e => {
  e.preventDefault();
  error.style.display = 'block';
  error.innerHTML = 'Oops! Please check your email';
});
