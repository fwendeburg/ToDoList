export default class Project {
    static #nextId = 0;

    constructor() {
        this.tasks = [];
        this.id = Task.#nextId++;
    }

    getTasks() {
        return tasks
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getId() {
        return id;
    }
}