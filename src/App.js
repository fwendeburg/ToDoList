import ToDo from "./ToDo";
import Storage from './Storage';

export default class App {
    static #storage;
    static #todo;

    static initApp() {
        this.#storage = new Storage('Local-ToDoList');
        this.#todo = ToDo.withJSONData(this.#storage.getSavedData());
    }

    static updateTaskInfo(taskId, name, desc, dueDate, priority, project) {
        this.#todo.updateTaskInfo(taskId, name, desc, dueDate, priority, project);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static getTask(taskId) {
        return this.#todo.getTask(taskId);
    }

    static changeTaskStatus(taskId) {
        this.#todo.changeTaskStatus(taskId);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static deleteTask(taskId) {
        this.#todo.deleteTask(taskId);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static getProjectByName(projectName) {
        return this.#todo.getProjectByName(projectName);
    }

    static addNewProject(newProject) {
        this.#todo.addNewProject(newProject);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static addNewTask(newTask) {
        this.#todo.addNewTask(newTask);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static getTasks() {
        return this.#todo.getTasks();
    }

    static getDueTodayTasks() {
        return this.#todo.getDueTodayTasks();
    }

    static getDueThisWeekTasks() {
        return this.#todo.getDueThisWeekTasks();
    }

    static getTasksByProject(projectName) {
        return this.#todo.getTasksByProject(projectName);
    }

    static getProjects() {
        return this.#todo.getProjects();
    }

    static getProjectNames() {
        return this.#todo.getProjectNames();
    }

    static removeData() {
        this.#storage.removeData();
    }

    static getProjectById(projId) {
        return this.#todo.getProjectById(projId);
    }

    static editProject(projid, newProjectName) {
        this.#todo.editProject(projid, newProjectName);

        this.#storage.saveData(this.#todo.toJSONObject());
    }

    static deleteProject(projId) {
        this.#todo.deleteProject(projId);

        this.#storage.saveData(this.#todo.toJSONObject());
    }
}

