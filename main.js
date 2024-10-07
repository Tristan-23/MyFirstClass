class Stoel {
  constructor(kleur, zithoogte) {
    this.kleur = kleur;
    this.zithoogte = zithoogte;
  }

  echoKleur() {
    return `De stoel is: ${this.kleur}`;
  }

  echoZithoogte() {
    return `De zithoogte van de stoel is: ${this.zithoogte} cm`;
  }

  verstelZithoogte(aanpassing) {
    this.zithoogte += aanpassing;
    return `De nieuwe zithoogte van de stoel is: ${this.zithoogte} cm`;
  }
}

// Example usage
const stoel = new Stoel("rood", 60);
console.log(stoel.echoKleur()); // Outputs: De stoel is: rood
console.log(stoel.echoZithoogte()); // Outputs: De zithoogte van de stoel is: 60 cm
console.log(stoel.verstelZithoogte(10)); // Outputs: De nieuwe zithoogte van de stoel is: 70 cm
