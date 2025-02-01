// file handler.js
const fs = require('fs');

// Créer le fichier welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('Fichier welcome.txt créé avec succès.');
});

// Lire le fichier welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu de welcome.txt :', data);
});