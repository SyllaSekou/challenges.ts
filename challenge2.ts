"noe.js"

// Interfaces pour les capacités transversales
interface QuatrePattes {}
interface Noir {}

// Classe de base
class Animal {}


// Familles d'animaux
class Chat extends Animal implements QuatrePattes {}
class Chien extends Animal implements QuatrePattes {}
class Oiseau extends Animal {}
class Poisson extends Animal {}

// Animaux concrets
class ChatEuropeen extends Chat implements Noir {}
class ChatChartreux extends Chat {}

class ChienTerreNeuve extends Chien implements Noir {}
class ChienMoonMoon extends Chien {}

class Mesange extends Oiseau {}
class Merle extends Oiseau implements Noir {}

class Thon extends Poisson {}
class RequinAsticot extends Poisson {}

// Actions
function photographier(animal: Animal) {
  console.log("Photo prise !");
}

function miauler(chat: Chat) {
  console.log("Miaou !");
}

function aboyer(chien: Chien) {
  console.log("Ouaf !");
}

function voler(oiseau: Oiseau) {
  console.log("Je vole !");
}

function nager(poisson: Poisson) {
  console.log("Je nage !");
}

function caresser(animal: QuatrePattes) {
  console.log("Quel animal doux !");
}

function nourrir(animal: Noir) {
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