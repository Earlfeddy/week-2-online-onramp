
const buttonCan = document.getElementsByClassName('Cancel');
const buttonSen = document.getElementsByClassName('submit');
const inputBox = document.getElementById('name');
const inputBox = document.getElementById('E-mail');
const inputBox = document.getElementById('phone-number');
const inputBox = document.getElementById('message');

buttonCan.addEventListener('onclick', () => {
  const content = inputBox.value();
  if(cancel){
    alert('Clear all the input boxes');
    return;
  }
})

buttonSen.addEventListener('onclick', () => {
  const content = inputBox.value.trim();

  if(submit)(
    alert('check if input boxes are empty')c
  )

  if(!content){
    alert('all input boxes must be filled');
    inputBox.value = '';
  }
})

inputBox.addEventListener('input', () => {

  const content = inputBox.value();
  if(input !== phone-number){
    alert('phone number field must only contain numbers');
    return;
  }
})

inputBox.addEventListener('content', () => {
  const content = inputBox.value.trim();

  if(content && message > 100 Char){
    alert('message field cannot have more than 100 characters');
    return;
  }
})