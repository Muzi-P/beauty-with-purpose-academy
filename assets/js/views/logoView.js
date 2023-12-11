import View from "./View.js";
class LogoView extends View {
  _parentElement = document.querySelectorAll(".header-logo");

  addHandlerRender(handler) {
    ["load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    return this._generateMarkupLogo();
  }
  _generateMarkupLogo() {
    return `
    <a href="/" class="logo-container"
      ><img
        src="assets/img/logo_transparent.png"
        class="bwip-logo"
        alt="logo"
      />
      <div class="logo-title-container">
        <p class="logo-title-container-inner">
        <span class="logo-title-1">Beauty With Purpose</span> </br>
        <span class="logo-title-2">Academy</span></br>
        <span class="logo-title-3">
          SOCIAL IMPACT | EMPOWERMENT | BORN TO THRIVE
        </span>
      </p>
      </div>
    </a>
    `;
  }
}
export default new LogoView();
