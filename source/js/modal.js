var form = document.querySelector('.form');
var modalSuccess = document.querySelector('.modal-success');
var modalError = document.querySelector('.modal-error');
var closeErrorButton = document.querySelector('.modal-error__button');
var submitButton = document.querySelector('.form__button');
var closeButton = document.querySelector('.modal-success__button');
var surname = document.querySelector('.surname-input');
var name = document.querySelector('.name-input');
var mailAddress = document.querySelector('.input-email');


var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("surname-input");
   storage = localStorage.getItem("name-input");
   storage = localStorage.getItem("input-email");
} catch(err)  {
   isStorageSupport = false;
}

if (storage) {
  surname.value = storage;
  name.value = storage;
  mailAddress.focus();
} else {
  surname.focus();
}


submitButton.addEventListener('click', function(evt) {
  if (!surname || !name || !mailAddress) {
    evt.preventDefault();
    modalError.classList.add('modal-error-show');

    closeErrorButton.addEventListener('click', function(evt) {
         evt.preventDefault;
         modalError.classList.remove('modal-error-show');
      });
  } else {
     if (isStorageSupport) {
       localStorage.setItem("surname-input", surname.value);
       localStorage.setItem("name-input", name.value);
       localStorage.setItem("input-email", mailAddress.value);
     }
  }

});

submitButton.addEventListener('click', function(evt) {
  evt.preventDefault();

 if (modalSuccess.classList.contains('modal-success-closed')) {
   modalSuccess.classList.remove('modal-success-closed');
   modalSuccess.classList.add('modal-success-show');
} else {
   modalSuccess.classList.remove('modal-success-show');
   modalSuccess.classList.add('.modal-success-closed');
}

});

closeButton.addEventListener('click', function(evt) {
  evt.preventDefault;
  modalSuccess.classList.remove('modal-success-show');
});


