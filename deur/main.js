// main.js
const Deur = require("./deur.js");

const mijnDeur = new Deur("Hoofdingang");

// Probeer door de deur te lopen zonder deze te ontgrendelen
mijnDeur.doorDeurLopen();

// Ontgrendel de deur door de sleutel links te draaien
mijnDeur.sleutelGebruiken("links");

// Open de deur
mijnDeur.deurOpenen();

// Probeer door de deur te lopen
mijnDeur.doorDeurLopen();

// Vergrendel de deur door de sleutel rechts te draaien
mijnDeur.sleutelGebruiken("rechts");

// Probeer door de deur te lopen als deze vergrendeld is
mijnDeur.doorDeurLopen();
