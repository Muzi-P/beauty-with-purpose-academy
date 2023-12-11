import View from "./View.js";
class FormOptionsView extends View {
  constructor(parentElementSelector) {
    super();
    this._parentElement = document.querySelectorAll(parentElementSelector);
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    return `
      <option value="" selected disabled hidden>Subject*</option>
      ${this._data.map(this._generateMarkupFormOptions).join("")}
    `
  }
  _generateMarkupFormOptions({title}) {
    return `
    <option value="${title}">
      ${title}
    </option>
    `;
  }
}
export default FormOptionsView
