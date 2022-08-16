export default class Project {
    static #nextId = 0;

    constructor(name) {
        this.name = name;
        this.id = Project.#nextId++;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    setName(newName) {
        this.name = newName;
    }
}