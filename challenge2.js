"use strict";
"noe.js";
// Classe de base
class Animal {
}
// Familles d'animaux
class Chat extends Animal {
}
class Chien extends Animal {
}
class Oiseau extends Animal {
}
class Poisson extends Animal {
}
// Animaux concrets
class ChatEuropeen extends Chat {
}
class ChatChartreux extends Chat {
}
class ChienTerreNeuve extends Chien {
}
class ChienMoonMoon extends Chien {
}
class Mesange extends Oiseau {
}
class Merle extends Oiseau {
}
class Thon extends Poisson {
}
class RequinAsticot extends Poisson {
}
// Actions
function photographier(animal) {
    console.log("Photo prise !");
}
function miauler(chat) {
    console.log("Miaou !");
}
function aboyer(chien) {
    console.log("Ouaf !");
}
function voler(oiseau) {
    console.log("Je vole !");
}
function nager(poisson) {
    console.log("Je nage !");
}
function caresser(animal) {
    console.log("Quel animal doux !");
}
function nourrir(animal) {
    console.log("Bon appétit !");
}
// Création des objets
const chat1 = new ChatEuropeen();
const chien1 = new ChienTerreNeuve();
const oiseau1 = new Merle();
const poisson1 = new Thon();
// Affichage des résultats
photographier(chat1);
photographier(chien1);
miauler(chat1);
aboyer(chien1);
voler(oiseau1);
nager(poisson1);
caresser(chat1);
caresser(chien1);
nourrir(chat1);
nourrir(chien1);
nourrir(oiseau1);
