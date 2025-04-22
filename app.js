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

// Esercizio Dadi

const numeriDado = [
  1,
  2,
  3,
  4,
  5,
  6
]

console.log(numeriDado)

let userDice = Math.floor(Math.random() * (7 - 1) + 1);
console.log(userDice)

let botDice = Math.floor(Math.random() * (7 - 1) + 1);
console.log(botDice)

if (userDice > botDice) {
  alert('Hai vinto!')
}
else if (userDice < botDice) {
  alert('Hai perso...')
}
else if (userDice = botDice) {
  alert('Pareggio')
}