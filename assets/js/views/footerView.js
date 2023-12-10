import View from "./View.js";
class FooterView extends View {
  _parentElement = document.querySelectorAll(".footer-wrapper");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    return this._generateMarkupFooter();
  }
  _generateMarkupFooter() {
    return `
      <div
      class="shape-mockup jump d-none d-xxl-block"
      data-right="4%"
      data-bottom="30%"
    >
      <img src="assets/img/shape/flower-1-3.png" alt="flower" />
    </div>
    <div
      class="shape-mockup jump-reverse d-none d-xxxl-block"
      data-left="1%"
      data-top="5%"
    >
      <img src="assets/img/shape/b-s-1-3.png" alt="flower" />
    </div>
    <div class="widget-area">
      <div class="container">
        <div class="row justify-content-between gx-70">
          <div class="col-lg-4">
            <div class="widget footer-widget">
              <div class="footer-logo mb-3">
                <img
                  src="assets/img/logo-footer.png"
                  style="height: 80px"
                  alt="logo"
                />
              </div>
              <p class="footer-text">
                Welcome to Bewip, where beauty meets purpose. We empower
                through education, entrepreneurship, and social impact,
                transforming lives.
              </p>
              <p class="footer-info">
                <a href="tel:+01234567890" class="text-inherit"
                  ><i class="far fa-phone-alt text-theme me-2"></i>+0 123 456
                  7890</a
                >
                <br />
                <a
                  class="text-inherit"
                  href="mailto:customerservice@bewip.org"
                  ><i class="fal fa-envelope text-theme me-2"></i
                  >customerservice@bewip.org</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget widget_nav_menu footer-widget">
              <h3 class="widget_title">Important Links</h3>
              <div class="row">
                <div class="col-6">
                  <div class="menu-all-pages-container footer-menu">
                    <ul class="menu">
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="courses.html">Courses</a></li>
                      <li><a href="//#blog">Blog</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-6">
                  <div class="menu-all-pages-container footer-menu">
                    <ul class="menu">
                      <li><a href="/#service">Makeup Mastery</a></li>
                      <li><a href="/#service">Certification</a></li>
                      <li><a href="/#service">Hair Hub</a></li>
                      <li><a href="/#service">Mindset Magic</a></li>
                      <li><a href="/#service">Nail Tech Pro</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="widget footer-widget">
              <h3 class="widget_title">Recent Post</h3>
              <div class="recent-post-wrap">
                <div class="recent-post">
                  <div class="media-img">
                    <a href="#"
                      ><img
                        src="assets/img/blog/blog-4-4.jpg"
                        alt="Blog Image"
                    /></a>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title">
                      <a class="text-inherit" href="#"
                        >Bewip's Social Impact Recognized Globally</a
                      >
                    </h4>
                    <div class="recent-post-meta">
                      <a href="/#blog"
                        ><i class="fas fa-calendar-alt"></i>05 AUG, 2023</a
                      >
                    </div>
                  </div>
                </div>
                <div class="recent-post">
                  <div class="media-img">
                    <a href="#"
                      ><img
                        src="assets/img/blog/blog-4-3.jpg"
                        alt="Blog Image"
                    /></a>
                  </div>
                  <div class="media-body">
                    <h4 class="post-title">
                      <a class="text-inherit" href="#"
                        >Bewip Launches Mentorship Program for
                        Entrepreneurs</a
                      >
                    </h4>
                    <div class="recent-post-meta">
                      <a href="/#blog"
                        ><i class="fas fa-calendar-alt"></i>11 AUG, 2023</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-wrap">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-auto text-center">
            <p class="copyright-text">
              Copyright <i class="fal fa-copyright"></i> 2023
              <a href="/">Bewip</a>. All Rights Reserved By
              <a href="https://inventive.netlify.app/">Inventive</a>
            </p>
          </div>
          <div class="col-auto d-none d-md-block">
            <div class="social-style3">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}
export default new FooterView();
