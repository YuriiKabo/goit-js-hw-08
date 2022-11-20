import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formDataObj = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

populateData();

function onInput(e) {
  formDataObj[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDataObj));
}

function populateData() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedDataObj = JSON.parse(savedData);
  if (savedData) {
    input.value = savedDataObj.email;
    textarea.value = savedDataObj.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  console.log(formDataObj);
}
