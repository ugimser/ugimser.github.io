// Change it
const fs = require('fs');

// Aktualna data i czas
const currentDate = new Date().toString();
const content = `Ostatnia aktualizacja: ${currentDate}`;

// Ścieżka do pliku
const filePath = 'save.js';

// Zapisanie danych do pliku
fs.writeFileSync(filePath, content);

console.log('Plik został zaktualizowany.');
