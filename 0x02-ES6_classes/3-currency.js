export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(np) {
    this._code = np;
  }

  get name() {
    return this._name;
  }

  set name(np) {
    this._name = np;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
