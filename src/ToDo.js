import Project from './Project.js';
import Task from './Task.js';
import Storage from './Storage.js';
import { isToday, startOfToday, compareAsc, addDays, parseISO } from 'date-fns';

export default class ToDo {
    static #projects = [];

    static addNewProject(project) {
        this.#projects.push(project);

        Storage.saveData(this.#projects);
    }

    static changeTaskStatus(taskId) {
        let index = this.getProjectOfTask(taskId);

        if (index != -1) {
            this.#projects[index].toggleTaskStatus(taskId);

            Storage.saveData(this.#projects);
        }
    }

    static setProjects(projects) {
        this.#projects = projects;

        Storage.saveData(this.#projects);
    }

    static getAllTasks() {
        let tasks = [];

        for (let i = 0; i < this.#projects.length; i++) {
            this.#projects[i].getTasks().forEach(task => {
                tasks.push(task);
            });
        }

        return tasks;
    }

    static getProjects() {
        return this.#projects;
    }

    static addNewTask(task, project) {
        let index = this.#getProjectIndex(project);

        if (index != -1) {
            this.#projects[index].addTask(task);

            Storage.saveData(this.#projects);
        }
        else if (project == 'No project') {
            this.#projects[0].addTask(task);
        }
    }

    static #getProjectIndex(project) {
        let index = -1;

        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getName() === project) {
                index = i;
                break;
            }
        }
        return index;
    }

    static getProjectNames() {
        return this.#projects.map(project => project.getName());
    }

    static getProjectTasks(project) {
        let index = this.#getProjectIndex(project);
        let tasks = null;

        if (index != -1) {
            tasks = this.#projects[index].getTasks();
        }

        return tasks;
    }

    static getDueTodayTasks = () => {
        let tasks = [];

        for (let i = 0; i < this.#projects.length; i++) {
            let projectTasks = this.#projects[i].getTasks();

            for (let j = 0; j < projectTasks.length; j++) {
                if (isToday(parseISO(projectTasks[j].getDueDate()))) {
                    tasks.push(projectTasks[j]);
                }
            }
        }

        return tasks;
    }

    static deleteTask(taskId) {
        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getTaskIndex(taskId) != -1) {
                this.#projects[i].deleteTask(this.#projects[i].getTaskIndex(taskId));
                Storage.saveData(this.#projects);
                break;
            }
        }
    }

    static changeTaskInfo(taskId, name, desc, dueDate, priority) {
        let projectIndex = this.getProjectOfTask(taskId);
        let taskIndex;

        if (projectIndex != -1) {
            taskIndex = this.#projects[projectIndex].getTaskIndex(taskId);

            if (taskIndex != -1) {
                this.#projects[projectIndex].updateTaskInfo(taskIndex, name, desc, dueDate, priority);
                Storage.saveData(this.#projects);
            }
        }
    }


    static getDueThisWeekTasks = () => {
        let tasks = [];
        let nextWeek = addDays(startOfToday(), 7);

        for (let i = 0; i < this.#projects.length; i++) {
            let projectTasks = this.#projects[i].getTasks();

            for (let j = 0; j < projectTasks.length; j++) {
                if (compareAsc(parseISO(projectTasks[j].getDueDate()), nextWeek) != 1) {
                    tasks.push(projectTasks[j]);
                }
            }
        }

        return tasks;
    }

    static getProjectOfTask(taskId) {
        let projectIndex = -1;

        for (let i = 0; i < this.#projects.length; i++) {
            if (this.#projects[i].getTaskIndex(taskId) != -1) {
                projectIndex = i;
            }
        }

        return projectIndex;
    }

    static getTaskInfo(taskId) {
        let projectIndex = this.getProjectOfTask(taskId);
        let task = this.#projects[projectIndex].getTask(taskId);

        return [task.getName(), task.getDescription(), task.getDueDate(), task.getPriority()];
    }
}