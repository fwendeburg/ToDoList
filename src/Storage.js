export default class Storage {
    #saveName;

    constructor(saveName) {
        this.#saveName = saveName; 
    }

    saveData(data) {
        localStorage.setItem(this.#saveName, JSON.stringify(data));
    }

    getSavedData() {
        let loadedData = JSON.parse(localStorage.getItem(this.#saveName));

        if (loadedData === null) {
            loadedData = {
                projects: [],
                tasks: []
            }
        }

        return loadedData;
    }

    removeData() {
        localStorage.removeItem(this.#saveName);
    }
}