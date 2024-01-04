export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-underscore-dangle
    this._sqft = sqft;

  if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
  }
  }

  get sqft() {
    // eslint-disable-next-line no-underscore-dangle
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

}
