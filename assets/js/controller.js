import * as model from './model.js';
import servicesView from './views/servicesView.js';
import coursesView from './views/coursesView.js';

const controlServices = () => {
    // 1) Rendering services
    // servicesView.render(model.state);
}

const controlCourses = () => {
    // 1) Rendering courses
    coursesView.render(model.state);
}



const init = () => {
    servicesView.addHandlerRender(controlServices);
    coursesView.addHandlerRender(controlCourses);
};
init();
