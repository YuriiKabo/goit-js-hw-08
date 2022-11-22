import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  formDataObj[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formDataObj));
}

// const savedDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
const saveLocalItems = localStorage.getItem(LOCALSTORAGE_KEY);
const savedDataObj = JSON.parse(saveLocalItems);

function populateData() {
  if (saveLocalItems) {
    !savedDataObj.email ? '' : (input.value = savedDataObj.email);
    !savedDataObj.message ? '' : (textarea.value = savedDataObj.message);
  }
}

populateData();

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Заповнені не всі поля!!!');
  }
  const formOutput = { email: input.value, message: textarea.value };
  console.log(formOutput);

  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
