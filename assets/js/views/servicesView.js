import View from "./View.js";
class RecipeView extends View {
  _parentElement = document.querySelectorAll(".service5-slider");


  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }
  _generateMarkup() {
    return `${this._data.services.map(this._generateMarkupService).join("")}`;
  }
  _generateMarkupService(service) {
    return `
    <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="service-style5">
              <div class="service-icon">
                <img src="${service.image}" alt="icon" />
              </div>
              <div class="service-content">
                <h3 class="service-title h4">
                  <a class="text-inherit" href="service-details.html"
                    >${service.title}</a
                  >
                </h3>
                <p class="service-text">
                  ${service.description}
                </p>
              </div>
              <a href="service-details.html" class="service-btn"
                ><i class="far fa-plus"></i
              ></a>
            </div>
          </div>
    `;
  }
}
export default new RecipeView();
