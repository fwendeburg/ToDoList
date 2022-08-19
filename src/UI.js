import Task from './Task.js';
import Project from './Project.js';
import App from './App';

const kNOEMPTYFIELD = 'This field can\'t be empty';
const kNOTWHITESPACEALONE = 'Whitespaces alone are not valid';
const kDATEINVALID = 'The due date can\'t be before today';

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
            <div class="add-task-modal" role="dialog" aria-modal="true">
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

    static #showEditProjectModal() {
        const body = document.querySelector('body');
        const projectName = document.querySelector('#filter-name').innerText;
        const project = App.getProjectByName(projectName);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="add-project-modal">
                <div class="modal-header">
                    <h4>Edit project</h4>
                </div>

                <div class="inputs">
                    <div class="form-input all-sides-20px-margin">
                        <label for="proj-name-input">Title</label>
                        <br>
                        <input required type="text" id="proj-name-input" value="${project.getName()}">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        this.#addModalEventListeners('editProject');
    }

    static #showDeleteProjectModal() {
        const body = document.querySelector('body');
        const projName = document.querySelector('#filter-name').innerText;

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="delete-data-modal">
                <div class="modal-header">
                    <h4>Delete project "${projName}"?</h4>
                </div>

                <p class="modal-text">
                    Are you sure you want to delete this project?
                    <br>
                    This will also delete all tasks assigned to the project.
                </p>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="red-btn bottom-modal-btn">Delete project</button>
                </div>
            </div>
        </div>
        `);

        this.#addModalEventListeners('deleteProject');
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
                    <label tabindex="0">${name} - ${dueDate}</label>
                </div>

                <div class="right-side">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}" tabindex="0">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}" tabindex="0">delete_outline</span>
                    <span class="task-priority material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        const completedTaskInputs = document.querySelectorAll('.task-finished');
        const taskCompletedCheckbox = this.#getHTMLElementByTaskId(id, completedTaskInputs)

        taskCompletedCheckbox.addEventListener('click', (e) => {
            this.#changeTaskStatus(id, e.target.parentNode.parentNode);
        });

        taskCompletedCheckbox.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);

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

        const body = document.querySelector('body');

        label.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            this.#showTaskInfoModal(taskId);
        });

        label.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
    }

    static #addDeleteTaskBtnEventListener(id) {
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn = this.#getHTMLElementByTaskId(id, deleteTaskBtns);

        deleteTaskBtn.addEventListener('click', (e) => {
            this.#removeTaskEntry(e.target.dataset.taskid);

            App.deleteTask(e.target.dataset.taskid);
        });

        deleteTaskBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
    }

    static #addEditTaskBtnEventListener(id) {
        const editTaskBtns = document.querySelectorAll('.edit-task-btn');
        const body = document.querySelector('body');

        let editTaskBtn = this.#getHTMLElementByTaskId(id, editTaskBtns);

        editTaskBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            this.#showEditTaskModal(e.target.dataset.taskid);
        });

        editTaskBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
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

    static #removeTaskFiltersEventListeners() {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.removeEventListener('click', this.#handleFilterSelection));
    }

    static #addNewProjectNameToSidebar(name, id) {
        const projectContainer = document.querySelector('#project-list-container');

        projectContainer.insertAdjacentHTML('beforeend', `
        <div class="task-filter project" data-projid="${id}" tabindex="0">
            <span class="material-icons-outlined">description</span>
            <p>${name}</p>
        </div>
        `);

        const projectEntry = projectContainer.querySelector(`[data-projid='${id}']`);
        projectEntry.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);

        UI.#removeTaskFiltersEventListeners();
        UI.#setTaskFiltersEventListeners();
    }

    static #removeModal() {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        body.style = "";

        document.removeEventListener('keydown', UI.#handleTabKeyPressOnModal);

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

    static #removeProjectNameFromSidebar(id) {
        const project = document.querySelector(`[data-projid='${id}']`);
        const projectList = document.querySelector('#project-list-container');

        projectList.removeChild(project);
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

    static #handleTabKeyPressOnModal(firstFocusableElement, lastFocusableElement, e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
          return;
        }
      
        if (e.shiftKey) { // shift + tab
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }

    static #trapFocusOnModal(modal) {
        const  focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = modal.querySelectorAll(focusableElements);

        document.addEventListener('keydown', UI.#handleTabKeyPressOnModal.bind(null, focusableContent[0], focusableContent[focusableContent.length - 1]));
    
        focusableContent[0].focus();
    }

    static #addModalEventListeners(modalType, taskId = -1) {
        const body = document.querySelector('body');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const modal = modalWrapper.firstElementChild;
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
        else if (modalType === 'editProject') {
            continueBtn.addEventListener('click', () => {
                this.#handleEditProject();
                this.#removeModal();
            });
        }
        else if (modalType === 'deleteProject') {
            continueBtn.addEventListener('click', (e) => {
                this.#handleDeleteProject();
                this.#removeModal();
            });
        }

        modalWrapper.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.#removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleEscapeKeyPress);

        cancelBtn.addEventListener('click', UI.#removeModal);
    
        this.#trapFocusOnModal(modal);
    }

    static #updateProjectNameOnUI(projectId, newProjectName) {
        document.querySelector('#filter-name').innerText = newProjectName;

        const sidebarProjectList = document.querySelector('#project-list-container');
        const projectElement = sidebarProjectList.querySelector(`[data-projid="${projectId}"]`);
        
        projectElement.children[1].innerText = newProjectName;
    }

    static #handleEditProject() {
        if (UI.#areProjectFieldsValid()) {
            const newProjectName = document.querySelector('#proj-name-input').value;
            const currentProjectName = document.querySelector('#filter-name').innerText;
            const project = App.getProjectByName(currentProjectName);

            this.#updateProjectNameOnUI(project.getId(), newProjectName);

            App.editProject(project.getId(), newProjectName);

            UI.#removeModal();
        }
    }

    static #handleDeleteProject() {
        const projectName = document.querySelector('#filter-name').innerText;
        const project = App.getProjectByName(projectName);
        const projectTasks = App.getTasksByProject(projectName);
        
        this.#removeProjectNameFromSidebar(project.getId());

        projectTasks.forEach(task => {
            this.#removeTaskEntry(task.getId());
        });        

        App.deleteProject(project.getId());

        document.querySelector('#all-tasks').click();
    }

    static #addProjectActionButtons(filter) {
        const filterWithoutActions = ['All tasks', 'Today', 'This week'];

        if (!filterWithoutActions.includes(filter)) {
            const contentSectionHeader = document.querySelector('#content-section-header');
            const leftSide = contentSectionHeader.querySelector('.left-side');

            leftSide.insertAdjacentHTML('beforeend',`
                <div class="content-section-header-btn" id="edit-project-btn" tabindex="0">
                    <span class="material-icons-outlined">edit</span>
                </div>
                <div class="content-section-header-btn" id="delete-project-btn" tabindex="0">
                    <span class="material-icons-outlined">delete_outline</span>
                </div>
            `);

            const deleteProjectBtn = contentSectionHeader.querySelector('#delete-project-btn');
            const editProjectBtn = contentSectionHeader.querySelector('#edit-project-btn');
            
            deleteProjectBtn.addEventListener('click', (e) => {
                this.#showDeleteProjectModal();
            });

            editProjectBtn.addEventListener('click', (e) => {
                this.#showEditProjectModal();
            }); 

            deleteProjectBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
            editProjectBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        }
    }

    static #removeProjectActionButtons(filter) {
        const contentSectionHeader = document.querySelector('#content-section-header');
        
        const filterWithoutActions = ['All tasks', 'Today', 'This week'];

        if (!filterWithoutActions.includes(filter)) {
            const editProjBtn = contentSectionHeader.querySelector('#edit-project-btn');
            const deleteProjBtn = contentSectionHeader.querySelector('#delete-project-btn');

            editProjBtn.remove();
            deleteProjBtn.remove();
        }
    }

    static #handleFilterSelection(e) {
        const btnNodeList = document.querySelectorAll('.task-filter');
        const selectedBtn = e.currentTarget;
        const filterNameDisplay = document.querySelector('#filter-name');
        const currentFilterName = filterNameDisplay.innerText;

        // The paragraph element is the 3rd children of the btn pressed.
        const newFilter = selectedBtn.childNodes[3].innerText;

        for (let i = 0; i < btnNodeList.length; i++) {
            if (btnNodeList[i].classList.contains('selected') && btnNodeList[i] != selectedBtn) {
                btnNodeList[i].classList.remove('selected');
            }
        }

        UI.#removeProjectActionButtons(currentFilterName);

        if (!selectedBtn.classList.contains('selected')) {
            UI.#addProjectActionButtons(newFilter);

            selectedBtn.classList.add('selected');

            filterNameDisplay.innerText = newFilter;

            // sort arg missing
            UI.#displayTasks(UI.#getTasksForFilter(newFilter));
        }
    }   

    static #displayTasks(tasks, sort) {
        if (sort === 'alphabeticallyasc') {
            UI.#sortTasksAlphabeticallyAsc(tasks);
        }
        else if (sort === 'prioritydesc') {
            UI.#sortTasksByPriorityDesc(tasks);
        }
        else {
            console.log(tasks)
            UI.#sortTasksByDueDateAsc(tasks);
            console.log(tasks)
        }

        this.#clearTaskEntries();

        tasks.forEach(task => {
            this.#displayNewTask(task.getName(), task.getDueDate(), task.getPriority(),
            task.getId(), task.getStatus());
        });
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

        return tasks;
    }

    static #setTaskFiltersEventListeners() {
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', UI.#handleFilterSelection));
    }

    static #showSortTasksDropdownMenu() {
        const sortingOptions = document.querySelector('#sort-tasks-options');
        const sortTasksBtn = document.querySelector('#sort-tasks-btn')

        if (!sortingOptions.classList.contains('dropdown-content-visible')) {
            sortingOptions.classList.add('dropdown-content-visible');
            sortTasksBtn.classList.add('content-section-header-btn-hovered');

            window.addEventListener('click', UI.#removeTaskSortDropdownOnOusideClick);
        }
        else {
            sortingOptions.classList.remove('dropdown-content-visible');
            sortTasksBtn.classList.remove('content-section-header-btn-hovered');

            window.removeEventListener('click', UI.#removeTaskSortDropdownOnOusideClick);
        }
    }

    static #removeTaskSortDropdownOnOusideClick(e) {
        const sortTasksBtn = document.querySelector('#sort-tasks-btn');

        // Check if the target is the button that opens the dropdown menu.
        const isTargetSortTasksBtn = e.target.matches('#sort-tasks-btn');
        
        // Check if the target is either the text or the icon of the button.
        const isTargetSortTasksBtnIcon = e.target === sortTasksBtn.children[0];
        const isTargetSortTasksBtnText = e.target === sortTasksBtn.children[1];

        // Check if the target is an option of the menu.
        const isTargetDropdownContent = e.target.matches('#sort-tasks-options') || 
                                        e.target.parentNode.matches('#sort-tasks-options');


        if (!isTargetSortTasksBtn && !isTargetSortTasksBtnIcon && 
            !isTargetSortTasksBtnText && !isTargetDropdownContent) {
            const sortingOptions = document.querySelector('#sort-tasks-options');

            if (sortingOptions.classList.contains('dropdown-content-visible') &&
                sortTasksBtn.classList.contains('content-section-header-btn-hovered')
            ) {
                sortingOptions.classList.remove('dropdown-content-visible');
                sortTasksBtn.classList.remove('content-section-header-btn-hovered');

                window.removeEventListener('click', UI.#removeTaskSortDropdownOnOusideClick);
            }
        }
    }

    static #sortTasksByDueDateAsc(tasks) {
        tasks.sort((a, b) => {
            let duedateA = a.getDueDate();
            let duedateB = b.getDueDate();

            if (duedateA === duedateB) {
                return 0;
            }
            else if (duedateA === '') {
                return 1;
            }
            else if (duedateB === '') {
                return -1;
            }
            else {
                return new Date(duedateA) - new Date(duedateB);
            }
        });
    }

    static #sortTasksAlphabeticallyAsc(tasks) {
        tasks.sort((a, b) => {
            let nameA = a.getName().toLowerCase();
            let nameB = b.getName().toLowerCase();
            
            if (nameA === nameB) {
                return 0;
            }
            else if (nameA < nameB) {
                return -1;
            }
            else {
                return 1;
            }
        });
    }

    static #sortTasksByPriorityDesc(tasks) {
        tasks.sort((a, b) => {
            let pA = a.getPriority().toLowerCase();
            let pB = b.getPriority().toLowerCase();
            
            if (pA === pB) {
                return 0;
            }
            else if (pA === 'low' && (pB === 'medium' || pB === 'high')) {
                return 1;
            }
            else if (pA === 'medium' && pB === 'high') {
                return 1;
            }
            else {
                return -1;
            }
        });
    }

    static #handleTaskSortOptionSelection(e) {
        const filter = document.querySelector('#filter-name').innerText;
        const sortingOptions = document.querySelectorAll('.task-sort-option');

        for (let i = 0; i < sortingOptions.length; i++) {
            if (sortingOptions[i].classList.contains('selected') && sortingOptions[i] != e.currentTarget) {
                sortingOptions[i].classList.remove('selected');
            }
        }

        if (!e.currentTarget.classList.contains('selected')) {
            e.currentTarget.classList.add('selected');

            UI.#displayTasks(UI.#getTasksForFilter(filter), e.currentTarget.dataset.value);
        }
    }

    static #setTaskSortingOptionsEventListeners() {
        const sortingOptions = document.querySelectorAll('.task-sort-option');

        sortingOptions.forEach(option => {
            option.addEventListener('click', UI.#handleTaskSortOptionSelection);
        });
    }

    static #addUIEventListeners() {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('#add-project-btn');
        const deleteDataBtn = document.querySelector('#delete-data-btn');
        const deleteDataBtnAlt = document.querySelector('#delete-data-btn-alt');
        const sortTasksBtn = document.querySelector('#sort-tasks-btn');

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

        sortTasksBtn.addEventListener('click', (e) => {
            UI.#showSortTasksDropdownMenu();
        });

        addProjectBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        addTaskBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        deleteDataBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);
        sortTasksBtn.addEventListener('keydown', UI.#handleEnterOnFocusedHTMLElement);

        UI.#setTaskSortingOptionsEventListeners();

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

    static #handleEnterOnFocusedHTMLElement(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.target.click();
        }
    }

    static initUI() {
        UI.#addUIEventListeners();

        let projects = App.getProjects();

        projects.forEach(project => {
            this.#addNewProjectNameToSidebar(project.getName(), project.getId());
        });

        const showAllTasks = document.querySelector('#all-tasks');
        showAllTasks.classList.add('selected');

        // sort by duedate
        this.#displayTasks(this.#getTasksForFilter('All tasks'), 'duedateasc');
        
        const duedateascSortOption = document.querySelector('[data-value="duedateasc"]');
        duedateascSortOption.classList.add('selected');
    }
}