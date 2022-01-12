const email = document.getElementById('email');
const senha = document.getElementById('senha');
const emailTeste = 'tryber@teste.com';
const senhaTeste = '123456';
const btnsubmit = document.getElementById('entrar');
const btn2 = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

function login() {
  if ((email.value === emailTeste) && (senha.value === senhaTeste)) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnsubmit.addEventListener('click', login);

//  https://www.w3schools.com/jsref/prop_checkbox_checked.asp

function submit() {
  if (agreement.checked) {
    btn2.disabled = false;
  } else {
    btn2.disabled = true;
  }
}

agreement.addEventListener('click', submit);
