const throttle = require('lodash.throttle');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

let feedbackForm = {
  email: '',
  message: '',
};

email.addEventListener('input', event => {
  const email = event.target.value;
  feedbackForm = { ...feedbackForm, email: email };
  //   console.log('email:', event.target.value);
  throttledSaveStateToLocalStorage();
});

message.addEventListener('input', event => {
  const message = event.target.value;
  feedbackForm = { ...feedbackForm, message: message };
  throttledSaveStateToLocalStorage();
});

function saveStateToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

const throttledSaveStateToLocalStorage = throttle(saveStateToLocalStorage, 500);

const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings);

email.value = parsedSettings.email;
message.value = parsedSettings.message;

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log(parsedSettings);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});
