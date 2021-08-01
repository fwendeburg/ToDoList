import ToDo from './ToDo.js';
import Project from './Project.js';
import Task from './Task.js';
import { startOfToday, formatISO } from 'date-fns';

export default class Storage {
    static #saveName = 'ToDoList';

    static saveData(data) {
        localStorage.setItem(this.#saveName, JSON.stringify(data));
    }

    static loadData() {
        let loadedData = false;

        let projects = JSON.parse(localStorage.getItem(this.#saveName));

        if (projects) {
            projects = projects.map(project => Object.assign(new Project(), project));

            projects.forEach(project => {
                project.setTasks(project.getTasks().map((task => Object.assign(new Task(), task))))
            });
    
            ToDo.setProjects(projects);

            loadedData = true;
        }

        return loadedData;
    }

    static initToDo() {
        if (!this.loadData()) {
            let defaultProject = new Project('default');

            defaultProject.addTask(new Task('Example', 'An example task', 
            formatISO(startOfToday(), { representation: 'date' }), 'Low'));

            ToDo.addNewProject(defaultProject);
        }
    }

    static removeData() {
        localStorage.removeItem(this.#saveName);
    }
}