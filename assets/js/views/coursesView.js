import View from "./View.js";
class CourseView extends View {
  _parentElement = document.querySelector(".courses");

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
  _generateMarkup() {
    return `${this._data.courses.map(this._generateMarkupCourse).join("")}`;
  }
  _generateMarkupCourse({ title, description, tutor, href, date, picUrl }) {
    return `
    <div class="col-xl-4">
    <div class="vs-blog blog-style4">
      <div class="blog-img">
        <a href="blog-details.html"
          ><img
            src="${picUrl}"
            alt="Blog Thumbnail"
            class="w-100"
        /></a>
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <a href="blog.html"
            ><i class="fal fa-calendar-alt"></i>${date}</a
          >
          <a href="blog.html"
            ><i class="fal fa-user-alt"></i>${tutor}</a
          >
        </div>
        <h3 class="blog-title h5">
          <a href="blog-details.html"
            >${title}</a
          >
        </h3>
        <p class="blog-text">
          ${description}
        </p>
        <a href=${href} class="blog-btn"
          ><i class="far fa-chevron-right"></i
        ></a>
      </div>
    </div>
  </div>
    `;
  }
}
export default new CourseView();
