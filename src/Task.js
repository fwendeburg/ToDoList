import { isToday, startOfToday, compareAsc, addDays, parseISO} from 'date-fns';

export default class Task {
    static #nextId = 0;

    constructor(name, description, duedate, priority, project) {
        this.name = name;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.id = Task.#nextId++;
        this.isCompleted = false;

        if (project === undefined) {
            this.project = null;
        }
        else {
            this.project = project;
        }
    }

    setProperties(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.duedate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    toggleTaskStatus() {
        this.isCompleted = !this.isCompleted;
    }

    getStatus() {
        return this.isCompleted;
    }

    getName() {
        return this.name;
    }

    getDescription = () => {
        return this.description;
    }

    getDueDate() {
        return this.duedate;
    }

    getPriority() {
        return this.priority;
    }

    getId() {
        return this.id;
    }

    getProject() {
        return this.project;
    }

    isDuedateToday() {
        if (this.duedate === '') {
            return false;
        }

        return isToday(parseISO(this.duedate));
    }

    isDuedateThisWeek() {
        if (this.duedate === '') {
            return false;
        }

        let nextWeek = addDays(startOfToday(), 7);

        return compareAsc(parseISO(this.duedate), nextWeek) != 1
    }
}