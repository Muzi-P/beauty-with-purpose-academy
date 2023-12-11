import * as model from './model.js';
import servicesView from './views/servicesView.js';
import coursesView from './views/coursesView.js';
import logoView from './views/logoView.js';
import sideMenuView from './views/sideMenuView.js';
import footerView from './views/footerView.js';
import FormOptionsView from './views/formOptionsView.js';

const enrollFormOptionsView = new FormOptionsView(".courses-select");
const contactFormOptionsView = new FormOptionsView(".contact-topics-select");

const controlServices = () => {
    // 1) Rendering services
    // servicesView.render(model.state);
}

const controlCourses = () => {
    // 1) Rendering courses
    coursesView.render(model.state);
}

const controlLogo = () => {
    // 1) Rendering logo
    logoView.render(model.state, true, true);
}

const controlSideMenu = () => {
    // 1) Rendering side menu
    sideMenuView.render(model.state);
}


const controlFooter = () => {
    // 1) Rendering a footer view
    footerView.render(model.state);
}

const controlEnrollFormOptions = () => {
    // 1) Rendering entroll form options
    enrollFormOptionsView.render(model.state.courses);
}

const controlContactFormOptions = () => {
    // 1) Rendering contact form options
    contactFormOptionsView.render(model.state.contactTopics);
}



const init = () => {
    servicesView.addHandlerRender(controlServices);
    coursesView.addHandlerRender(controlCourses);
    logoView.addHandlerRender(controlLogo);
    sideMenuView.addHandlerRender(controlSideMenu);
    footerView.addHandlerRender(controlFooter);
    enrollFormOptionsView.addHandlerRender(controlEnrollFormOptions);
    contactFormOptionsView.addHandlerRender(controlContactFormOptions);
};
init();
