import View from "./View.js";
class SideMenuView extends View {
  _parentElement = document.querySelectorAll(".sidemenu-content");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    return this._generateMarkupSideMenu();
  }
  _generateMarkupSideMenu() {
    return `
    <div class="widget">
          <div class="footer-logo">
            <img src="assets/img/logo_transparent.png" style="height: 80px" alt="logo" />
            <div class="logo-title-container">
              <p class="logo-title-container-inner">
              <span class="logo-title-1">Beauty With Purpose</span> </br>
              <span class="logo-title-2">Academy</span></br>
              <span class="logo-title-3">
                SOCIAL IMPACT | EMPOWERMENT | BORN TO THRIVE
              </span>
            </p>
            </div>
          </div>
          <div class="info-media1">
            <div class="media-icon"><i class="fal fa-map-marker-alt"></i></div>
            <span class="media-label">Mbabane, Swaziland</span>
          </div>
          <div class="info-media1">
            <div class="media-icon"><i class="far fa-phone-alt"></i></div>
            <span class="media-label"
              ><a href="tel:+01234567890" class="text-inherit"
                >+0 123 456 7890</a
              ></span
            >
          </div>
          <div class="info-media1">
            <div class="media-icon"><i class="fal fa-envelope"></i></div>
            <span class="media-label"
              ><a class="text-inherit" href="mailto:customerservice@bewip.org"
                >customerservice@bewip.org</a
              ></span
            >
          </div>
        </div>
        <div class="widget">
          <h3 class="widget_title">Latest post</h3>
          <div class="recent-post-wrap">
            ${this._generateLatestPostMarkup()}
          </div>
        </div>
    `;
  }

  _generateLatestPostMarkup() {
    return `${this._data.latestPosts.map(this._generateMarkupLatestPost).join("")}`;
  }

  _generateMarkupLatestPost({imgSrc, title, date}) {
    return `
    <div class="recent-post">
      <div class="media-img">
        <a href="#"
          ><img src="${imgSrc}" alt="Blog Image"
        /></a>
      </div>
      <div class="media-body">
        <h4 class="post-title">
          <a class="text-inherit" href="/#blog"
            >${title}</a
          >
        </h4>
        <div class="recent-post-meta">
          <a href="/#blog"
            ><i class="fas fa-calendar-alt"></i>${date}</a
          >
        </div>
      </div>
    </div>
    `
  }
}
export default new SideMenuView();
