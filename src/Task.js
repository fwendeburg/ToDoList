export default class Task {
    static #nextId = 0;

    constructor(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Task.#nextId++;
        this.isCompleted = false;
    }

    setAttributes(name, description, dueDate, priority) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    toggleTaskStatus() {
        this.isCompleted = !this.isCompleted;
    }

    getName() {
        return this.name;
    }

    getDescription = () => {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getId() {
        return this.id;
    }
}