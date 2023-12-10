export default class View {
  _data;

  render(data, render = true, clearFirst = false) {
    console.log(this._parentElement);
    this._data = data;
    const markup = this._generateMarkup();

    if (!render || !this._parentElement || Array.from(this._parentElement).length < 1) return markup;

    if (clearFirst) this._clear();

    Array.from(this._parentElement).forEach(element => {
      element.insertAdjacentHTML("beforeend", markup);
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
