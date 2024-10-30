// deur.js
class Deur {
  constructor(deurNaam) {
    this.opSlot = true;
    this.deuropening = false;
    this.deurNaam = deurNaam;
  }

  sleutelGebruiken(richting) {
    switch (richting) {
      case "links":
        this.opSlot = false;
        console.log(`De deur ${this.deurNaam} is ontgrendeld.`);
        break;
      case "rechts":
        this.opSlot = true;
        console.log(`De deur ${this.deurNaam} is vergrendeld.`);
        break;
      default:
        console.log(
          'Onbekende richting. Gebruik "links" om te ontgrendelen of "rechts" om te vergrendelen.'
        );
        break;
    }
  }

  deurOpenen() {
    if (this.opSlot) {
      console.log(
        `De deur ${this.deurNaam} is op slot en kan niet worden geopend!`
      );
    } else {
      this.deuropening = true;
      console.log(`De deur ${this.deurNaam} is geopend.`);
    }
  }

  doorDeurLopen() {
    if (this.opSlot) {
      console.log(
        `Je kunt niet door de deur ${this.deurNaam} lopen; de deur is op slot!`
      );
    } else if (!this.deuropening) {
      console.log(
        `Je kunt niet door de deur ${this.deurNaam} lopen; de deur is niet geopend!`
      );
    } else {
      console.log(`Je loopt door de deur ${this.deurNaam}.`);
    }
  }
}

module.exports = Deur;
