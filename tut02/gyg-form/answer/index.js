const input_box = document.querySelector('#input-text');
const form = document.querySelector('#form');
const textarea = document.querySelector('#textarea');

input_box.addEventListener('blur', () => {
  textarea.value = input_box.value;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input_box.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
    textarea.value = 'Valid Email';
  } else {
    textarea.value = 'Invalid Email';
  }
});