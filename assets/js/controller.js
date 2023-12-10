import * as model from './model.js';
import servicesView from './views/servicesView.js';
import coursesView from './views/coursesView.js';
import logoView from './views/logoView.js';
import sideMenuView from './views/sideMenuView.js';
import footerView from './views/footerView.js';

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
    // 1) Rendering a view
    footerView.render(model.state);
}



const init = () => {
    servicesView.addHandlerRender(controlServices);
    coursesView.addHandlerRender(controlCourses);
    logoView.addHandlerRender(controlLogo);
    sideMenuView.addHandlerRender(controlSideMenu);
    footerView.addHandlerRender(controlFooter);
};
init();
