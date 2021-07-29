export default class Project {
    static #nextId = 0;

    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.id = Project.#nextId++;
    }

    getTasks() {
        return this.tasks
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
}