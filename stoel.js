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

module.exports = Stoel;
