// password-generator.js
const generatePassword = require('generate-password');

// Fonction pour générer un mot de passe
function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
    });
    console.log('Mot de passe généré :', password);
}

generateRandomPassword();