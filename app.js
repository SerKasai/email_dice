// Esercizio Email

const emailUser = prompt('Inserisci la tua email');

const email = [
  'ajeje47@gmail.com',
  'brazorf0@live.it',
  'patagarru999@hotmail.com',
  'franco@libero.it',
];

for (let i = 0; i < email.length; i++) {
  console.log(i, email[i])
  let iscritti = email[i]
  if (emailUser == iscritti) {
    login = true
  }
  else {
    login = false
  }
}

if (login) {
  alert('Email valida. Accesso consentito')
}
else {
  alert('Email non valida. Accesso negato')
};

console.log(email, emailUser)

