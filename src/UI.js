import ToDo from './ToDo.js';
import Task from './Task.js';
import Project from './Project.js';
import { parseISO, format } from 'date-fns';

export default class UI {
    static #activateBurgerMenu = () => {
        const body = document.querySelector('body');
        const burgerMenuBtn = document.querySelector('.burger-menu');
        const sidebar = document.querySelector('#sidebar');

        let burgerMenuOpen = false;

        burgerMenuBtn.addEventListener('click', () => {
            if (!burgerMenuOpen) {
                burgerMenuOpen = true;
            }
            else {
                burgerMenuOpen = false;
            }
        
            sidebar.classList.toggle('visible-mobile-nav');
            burgerMenuBtn.classList.toggle('open');
        });
    }

    static showNewTaskModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-task-modal">
                <div class="modal-header">
                    <h4>New task</h4>
                </div>

                <div class="inputs">
                    <div class="new-task-modal-left-panel">
                        <div class="task-property">
                            <label>Title</label>
                            <br>
                            <input type="text" id="task-name-input">
                        </div>
                        <div class="task-property">
                            <label>Description</label>
                            <br>
                            <textarea id="task-description-input"></textarea>
                        </div>
                    </div>
                    <div class="new-task-modal-right-panel">
                        <div class="task-property">
                            <label>Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input">
                        </div>
                        <div class="task-property">
                            <label>Priority</label>
                            <br>
                            <select id="task-priority-input">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div class="task-property">
                            <label>Project</label>
                            <br>
                            <select id="task-project-input">
                                <option>All tasks</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Add task</button>
                </div>
            </div>
        </div>`
        );

        this.#updateProjectList();

        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        this.addModalEventListeners(modalType);
    }

    static showNewProjectModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-project-modal">
                <div class="modal-header">
                    <h4>New project</h4>
                </div>

                <div class="inputs">
                    <div class="project-property">
                        <label>Title</label>
                        <br>
                        <input type="text" id="proj-name-input">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Add project</button>
                </div>
            </div>
        </div>`
        );

        const continueBtn = document.querySelector('.continue-btn');
        // The 2nd element is the modal header.
        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        UI.addModalEventListeners(modalType);
    }

    static showEditTaskModal = (taskId) => {
        const body = document.querySelector('body');
        const taskInfo = ToDo.getTaskInfo(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-task-modal">
                <div class="modal-header">
                    <h4>Edit Task</h4>
                </div>

                <div class="inputs">
                    <div class="new-task-modal-left-panel">
                        <div class="task-property">
                            <label>Title</label>
                            <br>
                            <input type="text" id="task-name-input" value="${taskInfo[0]}">
                        </div>
                        <div class="task-property">
                            <label>Description</label>
                            <br>
                            <textarea id="task-description-input">${taskInfo[1]}</textarea>
                        </div>
                    </div>
                    <div class="new-task-modal-right-panel">
                        <div class="task-property">
                            <label>Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input" value="${format(taskInfo[2], 'yyyy-MM-dd')}">
                        </div>
                        <div class="task-property">
                            <label>Priority</label>
                            <br>
                            <select id="task-priority-input">
                                <option ${(taskInfo[3] === 'Low')? 'selected="selected"' : ''}>Low</option>
                                <option ${(taskInfo[3] === 'Medium')? 'selected="selected"' : ''}>Medium</option>
                                <option ${(taskInfo[3] === 'High')? 'selected="selected"' : ''}>High</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        UI.addModalEventListeners(modalType, taskId);
    }

    static showTaskInfoModal = (taskId) => {
        const body = document.querySelector('body');
        const taskInfo = ToDo.getTaskInfo(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="show-task-modal">
                <div class="modal-header">
                    <h4>${taskInfo[0]}</h4>
                </div>

                <div class="properties">
                    <div class="show-task-modal-left-panel">
                        <div class="task-property">
                            <p class="property-title">Title:</p>
                            <p>${taskInfo[0]}</p>
                        </div>
                        <div class="task-property">
                            <p class="property-desc">Description:</p>
                            <p>${taskInfo[1]}</p>
                        </div>
                    </div>
                    <div class="show-task-modal-right-panel">
                        <div class="task-property">
                            <p class="property-due-date">Due date:</p>
                            <p>${format(taskInfo[2], "yyyy/MM/dd")}</p>
                        </div>
                        <div class="task-property">
                            <p class="property-priority">Priority:</p>
                            <p>${taskInfo[3]}</p>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Edit task</button>
                </div>
            </div>
        </div>`
        );


        const modalType = document.querySelector('.modal-header').childNodes[1].innerText;

        UI.addModalEventListeners(modalType, taskId);
    }

    static addNewTask = (name, dueDate, priority, id) => {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task" data-taskid ="${id}">
                <div class="left-panel">
                    <input type="checkbox" class="task-finished">
                    <label>${name} - ${format(dueDate, "yyyy/MM/dd")}</label>
                </div>

                <div class="right-panel">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}">delete_outline</span>
                    <span id="task-priority" class="material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        this.addTaskInfoEL(id);
        this.addEditTaskBtnEL(id);
        this.addDeleteTaskBtnEL(id);
    }

    static addTaskInfoEL(taskId) {
        const taskInfo = document.querySelector(`[data-taskid='${taskId}']`);
        const label = taskInfo.querySelector('label');

        label.addEventListener('click', (e) => {
            this.showTaskInfoModal(taskId);
        })
    }

    static addDeleteTaskBtnEL(id) {
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn;

        for (let i = 0; i < deleteTaskBtns.length; i++) {
            if (deleteTaskBtns[i].dataset.taskid == id) {
                deleteTaskBtn = deleteTaskBtns[i];
                break;
            };
        }

        deleteTaskBtn.addEventListener('click', (e) => {
            this.removeTask(e.target.dataset.taskid);

            ToDo.deleteTask(e.target.dataset.taskid);
        })
    }

    static addEditTaskBtnEL(id) {
        const editTaskBtns = document.querySelectorAll('.edit-task-btn');
        let editTaskBtn;

        for (let i = 0; i < editTaskBtns.length; i++) {
            if (editTaskBtns[i].dataset.taskid == id) {
                editTaskBtn = editTaskBtns[i];
                break;
            }
        }

        editTaskBtn.addEventListener('click', (e) => {
            this.showEditTaskModal(e.target.dataset.taskid);
        });
    }

    static #handleTaskEdit(id) {
        const newTaskName = document.querySelector('#task-name-input').value;
        const newTaskDesc = document.querySelector('#task-description-input').value;
        const newTaskDueDate = parseISO(document.querySelector('#task-duedate-input').value);
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectInput = document.querySelector('#task-project-input');

        ToDo.changeTaskInfo(id, newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority);

        this.#updateTaskEntry(id, newTaskName, newTaskDueDate, newTaskPriority);

        this.removeModal();
    }

    static #updateTaskEntry(taskId, name, dueDate, priority) {
        const task = document.querySelector(`[data-taskid='${taskId}']`);
        const taskPriority = task.querySelector('#task-priority');
        const taskName = task.querySelector('label');

        taskName.innerText = `${name} - ${format(dueDate, "yyyy/MM/dd")}`;

        // Remove current priority.
        taskPriority.classList.remove('task-low-priority');
        taskPriority.classList.remove('task-medium-priority');
        taskPriority.classList.remove('task-high-priority');

        taskPriority.classList.add(`task-${priority.toLowerCase()}-priority`);
    }

    static addNewProject = (name, id) => {
        const projects = document.getElementsByClassName('project');

        projects[projects.length -1].insertAdjacentHTML('afterend', `
        <div class="task-filter project" data-projid="${id}">
            <span class="material-icons-outlined">description</span>
            <p>${name}</p>
        </div>
        `);

        UI.#updateTaskFiltersEventListeners();
    }

    static removeModal = () => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        if (modal) {
            modal.textContent = '';

            body.removeChild(modal);
    
            UI.#removeModalEventListeners();
        }
    }

    static removeTask = (id) => {
        const task = document.querySelector(`[data-taskid='${id}']`);
        const content = document.querySelector('.content');

        content.removeChild(task);
    }

    static clearTasks = () => {
        const content = document.querySelector('.content');

        const tasks = document.querySelectorAll('.task');

        tasks.forEach(task => {
            content.removeChild(task);
        });
    }

    static removeProject = (id) => {
        const project = document.querySelector(`[data-projid='${id}']`);
        const projects = document.querySelector('.projects');

        projects.removeChild(project);
    }

    static clearProjects = () => {
        const projectContainer = document.querySelector('.projects');

        const projects = document.querySelectorAll('.project');

        projects.forEach(proj => {
            projectContainer.removeChild(proj);
        })
    }

    static #handleModalEventEsc = (e) => {
        if (e.key === 'Escape') {
            UI.removeModal();
        }
    }

    static #handleNewProject() {
        const newProjectName = document.querySelector('#proj-name-input');

        const newProject = new Project(newProjectName.value);

        ToDo.addNewProject(newProject);

        UI.addNewProject(newProject.getName(), newProject.getId());

        UI.removeModal();
    }

    static #handleNewTask() {
        const newTaskName = document.querySelector('#task-name-input').value;
        const newTaskDesc = document.querySelector('#task-description-input').value;
        const newTaskDueDate = parseISO(document.querySelector('#task-duedate-input').value);
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectInput = document.querySelector('#task-project-input');
        const newTaskProject = taskProjectInput.options[taskProjectInput.selectedIndex].value;

        const newTask = new Task(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority);

        ToDo.addNewTask(newTask, newTaskProject);

        UI.addNewTask(newTask.getName(), newTask.getDueDate(), newTask.getPriority(), newTask.getId());

        UI.removeModal();
    }

    static addModalEventListeners = (modalType, taskId = -1) => {
        const body = document.querySelector('body');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const cancelBtn = document.querySelector('.cancel-btn');
        const continueBtn = document.querySelector('.continue-btn');

        if (modalType === 'New task') {
            continueBtn.addEventListener('click', this.#handleNewTask);
        }
        else if (modalType === 'New project') {
            continueBtn.addEventListener('click', this.#handleNewProject);
        }
        else if (modalType === 'Edit Task') {
            continueBtn.addEventListener('click', () => {
                this.#handleTaskEdit(taskId);
            });
        }
        else {
            continueBtn.addEventListener('click', () => {
                this.removeModal();
                this.showEditTaskModal(taskId);
            });
        }

        modalWrapper.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleModalEventEsc);

        cancelBtn.addEventListener('click', UI.removeModal);
    }

    static #removeModalEventListeners = () => {
        const body = document.querySelector('body');

        body.removeEventListener('keydown', UI.#handleModalEventEsc);
    }

    static #handleFilterSelection = (selectedBtn, btnNodeList) => {
        const projectNameDisplay = document.querySelector('#project-name');

        // The paragraph element is the 3rd children of the btn pressed.
        const projectName = selectedBtn.childNodes[3];

        for (let i = 0; i < btnNodeList.length; i++) {
            if (btnNodeList[i].classList.contains('selected')) {
                btnNodeList[i].classList.remove('selected');
            }
        }

        selectedBtn.classList.add('selected');

        projectNameDisplay.innerText = projectName.innerText;

        this.#getProjectsForFilter(selectedBtn.childNodes[3].innerText);
    }

    static #getProjectsForFilter = (filter) => {
        let tasks;

        if (filter === 'All tasks') {
            // Todo.
        }
        else if (filter === 'Today') {
            tasks = ToDo.getDueTodayTasks();
        }
        else if (filter === 'This week') {
            tasks = ToDo.getDueThisWeekTasks();
        }
        else {
            tasks = ToDo.getProjectTasks(filter);
        }

        this.clearTasks();        

        if (tasks) {
            tasks.forEach(task => {
                this.addNewTask(task.getName(), task.getDueDate(), task.getPriority(), task.getId());
            });
        }
    }

    static #updateTaskFiltersEventListeners = () => {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', (e) => {
            UI.#handleFilterSelection(e.currentTarget, taskFilters);
        }));
    }

    static addHomepageEventListeners = () => {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('.add-project-btn');

        UI.#updateTaskFiltersEventListeners();

        addProjectBtn.addEventListener('click', (e) => {
            UI.showNewProjectModal();
        });

        addTaskBtn.addEventListener('click', (e) => {
            UI.showNewTaskModal();
        });

        addTaskBtnAlt.addEventListener('click', (e) => {
            UI.showNewTaskModal();
        });

        UI.#activateBurgerMenu();
    }

    static #updateProjectList() {
        const taskProjectInput = document.querySelector('#task-project-input');
        let projectNames = ToDo.getProjectNames();

        for (let i = 0; i < projectNames.length; i++) {
            taskProjectInput.insertAdjacentHTML('beforeend', `
            <option>${projectNames[i]}</option>
            `)
        }
    }
}