import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name = "email"]');
const message = form.querySelector('textarea[name = "message"]');



const StateForm = throttle(() => {
const state = {
    email: input.value,
    message: message.value, 
};
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
},  500);


form.addEventListener('input', StateForm);
const SavedTime = localStorage.getItem('feedback-form-state');

if (SavedTime) {
    const state = JSON.parse(SavedTime);
    input.value = state.email;
    message.value = state.message;
}


form.addEventListener('submit', (evt) => {
evt.preventDefault()
const state = {
    email: input.value,
    message: message.value,
};
console.log(state);

localStorage.removeItem('feedback-form-state');
    input.value = "";
    message.value = "";
});
