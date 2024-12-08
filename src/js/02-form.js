let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

try {
  if (localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    for (const key in formData) {
      form.elements[key].value = formData[key];
    }
  }
} catch (error) {
  console.log(error);
  localStorage.removeItem('feedback-form-state');
}
function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);

  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
