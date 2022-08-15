import Task from './Task.js';
import Project from './Project.js';
import App from './App';

const kNOEMPTYFIELD = 'This field can\'t be empty';
const kNOTWHITESPACEALONE = 'Whitespaces alone are not valid';
const kDATEINVALID = 'The due date can\'t be before today';

export default class UI {

    
    /*
    **  Responsiveness related methods
    */

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

    /*
    **  Modals
    */

    static #showDeleteDataModal() {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="delete-data-modal">
                <div class="modal-header">
                    <h4>Delete stored data?</h4>
                </div>

                <p class="modal-text">
                    You are about to delete all stored project and task data.
                    <br>
                    Are you sure you want to do this?
                </p>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="red-btn bottom-modal-btn">Delete data</button>
                </div>
            </div>
        </div>
        `);

        this.#addModalEventListeners('deleteStoredData');
    }

    static #showNewTaskModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-task-modal">
                <div class="modal-header">
                    <h4>New task</h4>
                </div>

                <div class="inputs">
                    <div class="modal-left-panel">
                        <div class="form-input">
                            <label for="task-name-input">Title</label>
                            <br>
                            <input required type="text" id="task-name-input">
                        </div>
                        <div class="form-input">
                            <label for="task-description-input" >Description</label>
                            <br>
                            <textarea id="task-description-input"></textarea>
                        </div>
                    </div>
                    <div class="modal-right-panel">
                        <div class="form-input">
                            <label for="task-duedate-input">Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input">
                        </div>
                        <div class="form-input">
                            <label for="task-priority-input">Priority</label>
                            <br>
                            <select required id="task-priority-input">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div class="form-input">
                            <label for="task-project-input">Project</label>
                            <br>
                            <select required id="task-project-input">
                                <option>No project</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Add task</button>
                </div>
            </div>
        </div>`
        );

        this.#addOptionsToProjectSelector();

        this.#addModalEventListeners('newTask');
    }

    static #showNewProjectModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-project-modal">
                <div class="modal-header">
                    <h4>New project</h4>
                </div>

                <div class="inputs">
                    <div class="form-input all-sides-20px-margin">
                        <label for="proj-name-input">Title</label>
                        <br>
                        <input required type="text" id="proj-name-input">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Add project</button>
                </div>
            </div>
        </div>`
        );

        UI.#addModalEventListeners('newProject');
    }

    static #showEditTaskModal = (taskId) => {
        const body = document.querySelector('body');
        const task = App.getTask(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="edit-task-modal">
                <div class="modal-header">
                    <h4>Edit Task</h4>
                </div>

                <div class="inputs">
                    <div class="modal-left-panel">
                        <div class="form-input">
                            <label for="task-name-input">Title</label>
                            <br>
                            <input required type="text" id="task-name-input" value="${task.getName()}">
                        </div>
                        <div class="form-input">
                            <label for="task-descritpion-input">Description</label>
                            <br>
                            <textarea id="task-description-input">${task.getDescription()}</textarea>
                        </div>
                    </div>
                    <div class="modal-right-panel">
                        <div class="form-input">
                            <label for="task-duedate-input">Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input" value="${task.getDueDate()}">
                        </div>
                        <div class="form-input">
                            <label for="task-priority-input">Priority</label>
                            <br>
                            <select required id="task-priority-input">
                                <option ${(task.getPriority() === 'Low')? 'selected="selected"' : ''}>Low</option>
                                <option ${(task.getPriority() === 'Medium')? 'selected="selected"' : ''}>Medium</option>
                                <option ${(task.getPriority() === 'High')? 'selected="selected"' : ''}>High</option>
                            </select>
                        </div>
                        <div class="form-input">
                            <label for="task-project-input">Project</label>
                            <br>
                            <select required id="task-project-input">
                                <option>No project</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        this.#addOptionsToProjectSelector();

        UI.#addModalEventListeners('editTask', taskId);
    }

    static #showTaskInfoModal = (taskId) => {
        const body = document.querySelector('body');
        const task = App.getTask(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="show-task-modal">
                <div class="modal-header">
                    <h4>${task.getName()}</h4>
                </div>

                <div class="properties">
                    <div class="show-task-modal-left-panel">
                        <div>
                            <p class="property-name">Title:</p>
                            <p>${task.getName()}</p>
                        </div>
                        <div>
                            <p class="property-name">Description:</p>
                            <p>${task.getDescription() === ''? 'No description set' : task.getDescription()}</p>
                        </div>
                    </div>
                    <div class="show-task-modal-right-panel">
                        <div>
                            <p class="property-name">Due date:</p>
                            <p>${task.getDueDate() === ''? 'No due date set' : task.getDueDate()}</p>
                        </div>
                        <div>
                            <p class="property-name">Priority:</p>
                            <p>${task.getPriority()}</p>
                        </div>
                        <div>
                            <p class="property-name">Project:</p>
                        <p>${task.getProject() === null? 'Task not assigned to a project' : App.getProjectById(task.getProject()).getName()}</p>
                    </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Edit task</button>
                </div>
            </div>
        </div>`
        );

        UI.#addModalEventListeners('taskInfo', taskId);
    }

    /*
    **  Update task/project display
    */

    static #getHTMLElementByTaskId(id, elements) {
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].dataset.taskid == id) {
                return elements[i];
            };
        }

        return null;
    }

    static #displayNewTask = (name, dueDate, priority, id, taskStatus) => {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task-entry" data-taskid ="${id}">
                <div class="left-side">
                    <input type="checkbox" class="task-finished" data-taskid="${id}">
                    <label>${name} - ${dueDate}</label>
                </div>

                <div class="right-side">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}">delete_outline</span>
                    <span class="task-priority material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        const completedTaskInputs = document.querySelectorAll('.task-finished');

        this.#getHTMLElementByTaskId(id, completedTaskInputs).addEventListener('click', (e) => {
            this.#changeTaskStatus(id, e.target.parentNode.parentNode);
        })

        if (taskStatus) {
            const task = this.#getHTMLElementByTaskId(id, document.querySelectorAll('.task-entry'));
    
            task.childNodes[1].classList.toggle('completedl');
            task.childNodes[1].childNodes[1].checked = true;
            task.childNodes[3].classList.toggle('completedr');
        };

        this.#addTaskInfoBtnEventListener(id);
        this.#addEditTaskBtnEventListener(id);
        this.#addDeleteTaskBtnEventListener(id);
    }

    static #changeTaskStatus(id, taskEntry) {
        App.changeTaskStatus(id);

        taskEntry.childNodes[1].classList.toggle('completedl');
        taskEntry.childNodes[3].classList.toggle('completedr');
    }

    static #addTaskInfoBtnEventListener(taskId) {
        const taskInfo = document.querySelector(`[data-taskid='${taskId}']`);
        const label = taskInfo.querySelector('label');

        label.addEventListener('click', (e) => {
            this.#showTaskInfoModal(taskId);
        })
    }

    static #addDeleteTaskBtnEventListener(id) {
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn = this.#getHTMLElementByTaskId(id, deleteTaskBtns);

        deleteTaskBtn.addEventListener('click', (e) => {
            this.#removeTaskEntry(e.target.dataset.taskid);

            App.deleteTask(e.target.dataset.taskid);
        })
    }

    static #addEditTaskBtnEventListener(id) {
        const editTaskBtns = document.querySelectorAll('.edit-task-btn');
        let editTaskBtn = this.#getHTMLElementByTaskId(id, editTaskBtns);

        editTaskBtn.addEventListener('click', (e) => {
            this.#showEditTaskModal(e.target.dataset.taskid);
        });
    }

    static #handleTaskEdit(id) {
        const newTaskName = document.querySelector('#task-name-input').value;
        const newTaskDesc = document.querySelector('#task-description-input').value;
        const newTaskDueDate = document.querySelector('#task-duedate-input').value;
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectName = document.querySelector('#task-project-input').value;

        const taskProject = (taskProjectName === 'No project'? null : 
        App.getProjectByName(taskProjectName).getId());

        App.updateTaskInfo(id, newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority, taskProject);

        this.#updateTaskEntry(id, newTaskName, newTaskDueDate, newTaskPriority);

        this.#removeModal();
    }

    static #updateTaskEntry(taskId, name, dueDate, priority) {
        const task = document.querySelector(`[data-taskid='${taskId}']`);
        const taskPriority = task.querySelector('.task-priority');
        const taskName = task.querySelector('label');

        taskName.innerText = `${name} - ${dueDate}`;

        // Remove current priority.
        taskPriority.classList.remove('task-low-priority');
        taskPriority.classList.remove('task-medium-priority');
        taskPriority.classList.remove('task-high-priority');

        taskPriority.classList.add(`task-${priority.toLowerCase()}-priority`);
    }

    static #addNewProjectNameToSidebar(name, id) {
        const projects = document.getElementsByClassName('project');

        if (projects.length == 0) {
            const projectContainer = document.querySelector('.projects');
            const containerHeader = projectContainer.childNodes[1];

            containerHeader.insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }
        else {
            projects[projects.length - 1].insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }

        UI.#setTaskFiltersEventListeners();
    }

    static #removeModal() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        body.style = "";

        if (modal) {
            body.removeChild(modal);

            body.removeEventListener('keydown', UI.#handleEscapeKeyPress);
        }
    }

    static #removeTaskEntry(id) {
        const task = document.querySelector(`[data-taskid='${id}']`);
        const content = document.querySelector('.content');

        content.removeChild(task);
    }

    static #clearTaskEntries() {
        const content = document.querySelector('.content');
        const tasks = document.querySelectorAll('.task-entry');

        tasks.forEach(task => {
            content.removeChild(task);
        });
    }

    static #removeProjectNameFromSidebar = (id) => {
        const project = document.querySelector(`[data-projid='${id}']`);
        const projects = document.querySelector('.projects');

        projects.removeChild(project);
    }

    static #clearProjectNamesFromSidebar() {
        const projectContainer = document.querySelector('.projects');
        const projects = document.querySelectorAll('.project');

        projects.forEach(proj => {
            projectContainer.removeChild(proj);
        })
    }

    static #handleEscapeKeyPress(e) {
        if (e.key === 'Escape') {
            UI.#removeModal();
        }
    }

    static #handleNewProject() {
        const newProjectName = document.querySelector('#proj-name-input');

        if (UI.#areProjectFieldsValid()) {
            const newProject = new Project(newProjectName.value);

            App.addNewProject(newProject);
    
            UI.#addNewProjectNameToSidebar(newProject.getName(), newProject.getId());
    
            UI.#removeModal();
        }
    }

    static #handleNewTask() {
        if (UI.#areTaskFieldsValid()) {
            const newTaskName = document.querySelector('#task-name-input').value;
            const newTaskDesc = document.querySelector('#task-description-input').value;
            const newTaskDueDate = document.querySelector('#task-duedate-input').value;
            const taskPriorityInput = document.querySelector('#task-priority-input');
            const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
            const taskProjectInput = document.querySelector('#task-project-input');
            const taskProjectName = taskProjectInput.options[taskProjectInput.selectedIndex].value;
            
            const taskProject = (taskProjectName === 'No project'? null : 
            App.getProjectByName(taskProjectName).getId());

            const newTask = new Task(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority, taskProject);
    
            App.addNewTask(newTask);
    
            UI.#displayNewTask(newTask.getName(), newTask.getDueDate(), newTask.getPriority(),
            newTask.getId(), newTask.getStatus());
    
            UI.#removeModal();
        }
    }

    static #addModalEventListeners(modalType, taskId = -1) {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');
        const cancelBtn = modal.querySelector('.grey-btn');
        const continueBtn = modal.querySelector('.blue-btn') || modal.querySelector('.red-btn');

        if (modalType === 'newTask') {
            continueBtn.addEventListener('click', this.#handleNewTask);
        }
        else if (modalType === 'newProject') {
            continueBtn.addEventListener('click', this.#handleNewProject);
        }
        else if (modalType === 'editTask') {
            continueBtn.addEventListener('click', () => {
                this.#handleTaskEdit(taskId);
            });
        }
        else if (modalType === 'taskInfo') {
            continueBtn.addEventListener('click', () => {
                this.#removeModal();
                body.style = "overflow-y: hidden;";
                this.#showEditTaskModal(taskId);
            });
        }
        else if (modalType === 'deleteStoredData') {
            continueBtn.addEventListener('click', () => {
                this.#handleDataDeletion();
                this.#removeModal();
            });
        }

        modal.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.#removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleEscapeKeyPress);

        cancelBtn.addEventListener('click', UI.#removeModal);
    }

    static #handleFilterSelection(selectedBtn, btnNodeList) {
        const projectNameDisplay = document.querySelector('#project-name');

        // The paragraph element is the 3rd children of the btn pressed.
        const projectName = selectedBtn.childNodes[3].innerText;

        for (let i = 0; i < btnNodeList.length; i++) {
            if (btnNodeList[i].classList.contains('selected')) {
                btnNodeList[i].classList.remove('selected');
            }
        }

        selectedBtn.classList.add('selected');

        projectNameDisplay.innerText = projectName;

        this.#getTasksForFilter(projectName);
    }

    static #getTasksForFilter(filter) {
        let tasks;

        if (filter === 'All tasks') {
            tasks = App.getTasks();
        }
        else if (filter === 'Today') {
            tasks = App.getDueTodayTasks();
        }
        else if (filter === 'This week') {
            tasks = App.getDueThisWeekTasks();
        }
        else {
            tasks = App.getTasksByProject(filter);
        }

        this.#clearTaskEntries();        

        if (tasks) {
            tasks.forEach(task => {
                this.#displayNewTask(task.getName(), task.getDueDate(), task.getPriority(),
                task.getId(), task.getStatus());
            });
        }
    }

    static #setTaskFiltersEventListeners() {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', (e) => {
            UI.#handleFilterSelection(e.currentTarget, taskFilters);
        }));
    }

    static #addUIEventListeners() {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('#add-project-btn');
        const deleteDataBtn = document.querySelector('#delete-data-btn');
        const deleteDataBtnAlt = document.querySelector('#delete-data-btn-alt');

        const body = document.querySelector('body');

        UI.#setTaskFiltersEventListeners();

        addProjectBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showNewProjectModal();
        });

        addTaskBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showNewTaskModal();
        });

        addTaskBtnAlt.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showNewTaskModal();
        });

        deleteDataBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showDeleteDataModal();
        });

        deleteDataBtnAlt.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.#showDeleteDataModal();
        });

        UI.#activateBurgerMenu();
    }

    static #addOptionsToProjectSelector() {
        const taskProjectInput = document.querySelector('#task-project-input');
        let projectNames = App.getProjectNames();

        for (let i = 0; i < projectNames.length; i++) {
            taskProjectInput.insertAdjacentHTML('beforeend', `
            <option>${projectNames[i]}</option>
            `);
        }
    }

    static #setInputAsInvalid(input, message) {
        const inputLabel = document.querySelector(`label[for=${input.id}]`);

        input.classList.add('invalid-input');
        inputLabel.classList.add('red-text');

        if (input.nextElementSibling === null) {
            input.insertAdjacentHTML('afterend', `<span class="invalid-input-message">${message}</span>`);
        }
    }

    static #setInputAsValid(input) {
        const inputLabel = document.querySelector(`label[for=${input.id}]`);

        input.classList.remove('invalid-input');
        inputLabel.classList.remove('red-text');

        input.nextElementSibling.remove();
    }

    static #isTextInputValid(input) {
        if (input.value === '') {
            this.#setInputAsInvalid(input, kNOEMPTYFIELD);
            return false;
        }
        else if (input.value.trim() === '') {
            this.#setInputAsInvalid(input, kNOTWHITESPACEALONE);
            return false;
        }
        else if (input.classList.contains('invalid-input')) {
            this.#setInputAsValid(input);
        }

        return true;
    }

    static #isOptionsInputValid(input) {
        if (input.value === '') {
            this.#setInputAsInvalid(input, kNOEMPTYFIELD);
            return false;
        }
        else if (input.classList.contains('invalid-input')) {
            this.#setInputAsValid(input);
        }

        return true;
    }

    static #isDateValid(input) {
        const d = new Date();
        const currentDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const inputDate = new Date(input.value);
        
        if (inputDate < currentDate) {
            this.#setInputAsInvalid(input, kDATEINVALID);
            return false;
        }
        else if (input.classList.contains('invalid-input')) {
            this.#setInputAsValid(input);
        }

        return true;
    }

    static #areTaskFieldsValid() {
        const taskName = document.querySelector('#task-name-input');
        const taskDueDate = document.querySelector('#task-duedate-input');
        const taskPriority = document.querySelector('#task-priority-input');
        const taskProject = document.querySelector('#task-project-input');

        const validName = this.#isTextInputValid(taskName);
        const validDueDate = (taskDueDate.value === '' | this.#isDateValid(taskDueDate));
        const validPriority = this.#isOptionsInputValid(taskPriority);
        const validProject = this.#isOptionsInputValid(taskProject);

        return (validName && validDueDate && validPriority && validProject);
    }

    static #areProjectFieldsValid() {
        const projName = document.querySelector('#proj-name-input');

        return this.#isTextInputValid(projName);
    }

    static #handleDataDeletion() {
        App.removeData();
        window.location.reload();
    }

    static initUI() {
        UI.#addUIEventListeners();

        let projects = App.getProjects();

        projects.forEach(project => {
            this.#addNewProjectNameToSidebar(project.getName(), project.getId());
        });

        const showAllTasks = document.querySelector('#all-tasks');
        showAllTasks.click();
    }
}