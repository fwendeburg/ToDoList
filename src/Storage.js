export default class Storage {
    static #saveName = 'ToDoList';

    static saveData(data) {
        localStorage.setItem(this.#saveName, data);
    }
}