(function () {
  const fieldset = document.querySelector('fieldset');
  const button = document.querySelector('button');
  const mobileLink = document.getElementById('mobileLink');
  const emailLink = document.getElementById('emailLink');
  const message = document.querySelector('.form__message');
  const spinner = document.querySelector('.form__spinner');

  const toggleElements = function toggleInputElements(id1, id2) {
    let element1 = document.getElementById(id1);
    let element2 = document.getElementById(id2);
    element1.style.display = 'block';
    element2.style.display = 'none';
    element1.value = '';
    element2.value = '';
    document.getElementById('terms').checked = false;
    document.getElementById('promo').checked = false;
    document.getElementById('currency').value = '0';
    document.getElementById('email').style.border = '1px solid gray';
    document.getElementById('number').style.border = '1px solid gray';
    message.style.display = 'none';
    fieldset.style.visibility = 'visible';
    fieldset.style.height = 'auto';
    button.disabled = false;
  };

  const validate = function validateInput() {
    let emailMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let mobileMatch = /^\+?\d*$/;
    let input = document.querySelectorAll('input');
    input.forEach((el) => {
      if (el.style.display === 'block') {
        if (
          el.value.match(emailMatch) ||
          (el.value.match(mobileMatch) && el.value.length >= 9)
        ) {
          if (document.querySelector('#terms:checked') === null) {
            el.style.border = '1px solid gray';
            message.innerHTML = 'You must accept Terms & Conditions!';
            message.style.color = 'red';
            message.style.display = 'block';
            spinner.style.display = 'none';
          } else {
            el.style.border = '1px solid gray';
            message.innerHTML = 'Registration Successful!';
            message.style.color = '#01c343';
            message.style.display = 'block';
            spinner.style.display = 'none';
          }
        } else {
          el.style.border = '1px solid red';
          message.innerHTML = 'Invalid Input!';
          message.style.color = 'red';
          message.style.display = 'block';
          spinner.style.display = 'none';
        }
      }
    });
  };

  const showSpinner = function showSpinnerOnFormSubmit() {
    spinner.style.display = 'flex';
    message.style.display = 'none';
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();
    showSpinner();
    setTimeout(() => {
      validate();
    }, 400);
  });

  mobileLink.addEventListener('click', () => {
    toggleElements('number', 'email');
  });
  emailLink.addEventListener('click', () => {
    toggleElements('email', 'number');
  });
})();
