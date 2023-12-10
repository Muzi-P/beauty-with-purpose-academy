export default class View {
  _data;

  render(data, render = true, clearFirst = false) {
    this._data = data;
    const markup = this._generateMarkup();

    if (!render || !this._parentElement) return markup;

    if (clearFirst) this._clear();

    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
