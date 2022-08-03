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

    static showMobileLoginModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `<div class="modal-wrapper">
        <div class="mobile-log-reg-modal">
                <div class="modal-header">
                    <h4>Login</h4>
                </div>
        
                <div class="inputs-container">
                    <div class="form-input">
                        <label>Email</label>
                        <br>
                        <input type="email">
                    </div>
                    <div class="form-input">
                        <label>Password</label>
                        <br>
                        <input type="password">
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Login</button>
                </div>
            </div>
        </div>`
        );
    }

    static showMobileRegisterModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `<div class="modal-wrapper">
        <div class="mobile-log-reg-modal">
                <div class="modal-header">
                    <h4>Register</h4>
                </div>
        
                <div class="inputs-container">
                    <div class="form-input">
                        <label>Name</label>
                        <br>
                        <input type="text">
                    </div>
                    <div class="form-input">
                        <label>Email</label>
                        <br>
                        <input type="email">
                    </div>
                    <div class="form-input">
                        <label>Password</label>
                        <br>
                        <input type="password">
                    </div>
                    <div class="form-input">
                        <label>Confirm Password</label>
                        <br>
                        <input type="password">
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Register</button>
                </div>
            </div>
        </div>`
        );
    }

    static showUserAccountModal = () => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div id="user-account-modal">
                <div class="modal-header">
                    <h4>User account</h4>
                </div>
        
                <div id="local-mode-info">
                    <p>
                        You are currently using the app in local mode.
                        This means that any projects/tasks you create will be stored locally.
                        If you wish to save the data to a database you will have to sign
                        in to an account.
                    </p>
                    <a href="#">Remove Stored Data</a>
                </div>
        
                <div class="inputs">
                    <div class="modal-left-panel">
                        <h5 class="modal-subheader">Login</h5>
                        <div class="form-input">
                            <label>Email</label>
                            <br>
                            <input type="email">
                        </div>
                        <div class="form-input">
                            <label>Password</label>
                            <br>
                            <input type="password">
                        </div>
                        <button class="blue-btn login-register-btns">Login</button>
                    </div>
                    <div class="modal-right-panel">
                        <h5 class="modal-subheader">Register</h5>
                        <div class="form-input">
                            <label>Name</label>
                            <br>
                            <input type="text">
                        </div>
                        <div class="form-input">
                            <label>Email</label>
                            <br>
                            <input type="email">
                        </div>
                        <div class="form-input">
                            <label>Password</label>
                            <br>
                            <input type="password">
                        </div>
                        <div class="form-input">
                            <label>Confirm Password</label>
                            <br>
                            <input type="password">
                        </div>
                        <button class="blue-btn login-register-btns">Register</button>
                    </div>
                </div>
        
                <div class="modal-footer">
                    <button class="grey-btn bottom-modal-btn">Close</button>
                </div>
            </div>
        </div>`
        );
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
                    <div class="modal-left-panel">
                        <div class="form-input">
                            <label>Title</label>
                            <br>
                            <input type="text" id="task-name-input">
                        </div>
                        <div class="form-input">
                            <label>Description</label>
                            <br>
                            <textarea id="task-description-input"></textarea>
                        </div>
                    </div>
                    <div class="modal-right-panel">
                        <div class="form-input">
                            <label>Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input">
                        </div>
                        <div class="form-input">
                            <label>Priority</label>
                            <br>
                            <select id="task-priority-input">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div class="form-input">
                            <label>Project</label>
                            <br>
                            <select id="task-project-input">
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

        this.#updateProjectList();

        this.addModalEventListeners('newTask');
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
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Add project</button>
                </div>
            </div>
        </div>`
        );

        UI.addModalEventListeners('newProject');
    }

    static showEditTaskModal = (taskId) => {
        const body = document.querySelector('body');
        const taskInfo = ToDo.getTaskInfo(taskId);

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="edit-task-modal">
                <div class="modal-header">
                    <h4>Edit Task</h4>
                </div>

                <div class="inputs">
                    <div class="modal-left-panel">
                        <div class="form-input">
                            <label>Title</label>
                            <br>
                            <input type="text" id="task-name-input" value="${taskInfo[0]}">
                        </div>
                        <div class="form-input">
                            <label>Description</label>
                            <br>
                            <textarea id="task-description-input">${taskInfo[1]}</textarea>
                        </div>
                    </div>
                    <div class="modal-right-panel">
                        <div class="form-input">
                            <label>Due date</label>
                            <br>
                            <input type="date" id="task-duedate-input" value="${taskInfo[2]}">
                        </div>
                        <div class="form-input">
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
                    <button class="grey-btn bottom-modal-btn">Close</button>
                    <button class="blue-btn bottom-modal-btn">Save</button>
                </div>
            </div>
        </div>`
        );

        UI.addModalEventListeners('ediTask', taskId);
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
                        <div class="form-input">
                            <p class="property-title">Title:</p>
                            <p>${taskInfo[0]}</p>
                        </div>
                        <div class="form-input">
                            <p class="property-desc">Description:</p>
                            <p>${taskInfo[1]}</p>
                        </div>
                    </div>
                    <div class="show-task-modal-right-panel">
                        <div class="form-input">
                            <p class="property-due-date">Due date:</p>
                            <p>${taskInfo[2]}</p>
                        </div>
                        <div class="form-input">
                            <p class="property-priority">Priority:</p>
                            <p>${taskInfo[3]}</p>
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

        UI.addModalEventListeners('taskInfo', taskId);
    }

    static addNewTask = (name, dueDate, priority, id, taskStatus) => {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task" data-taskid ="${id}">
                <div class="left-panel">
                    <input type="checkbox" class="task-finished" data-taskid="${id}">
                    <label>${name} - ${dueDate}</label>
                </div>

                <div class="right-panel">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}">delete_outline</span>
                    <span id="task-priority" class="material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        const completedTaskInputs = document.querySelectorAll('.task-finished');
        let taskStatusToggle;

        for (let i = 0; i < completedTaskInputs.length; i++) {
            if (completedTaskInputs[i].dataset.taskid == id) {
                taskStatusToggle = completedTaskInputs[i];
                break;
            };
        }

        taskStatusToggle.addEventListener('click', (e) => {
            this.changeTaskStatus(id, e.target.parentNode.parentNode);
        })

        if (taskStatus) {
            const tasks = document.querySelectorAll('.task');
            let task;

            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].dataset.taskid == id) {
                    task = tasks[i];
                    break;
                };
            }
    
            task.childNodes[1].classList.toggle('completedl');
            task.childNodes[1].childNodes[1].checked = true;
            task.childNodes[3].classList.toggle('completedr');
        };

        this.addTaskInfoEL(id);
        this.addEditTaskBtnEL(id);
        this.addDeleteTaskBtnEL(id);
    }

    static changeTaskStatus(id, taskEntry) {
        ToDo.changeTaskStatus(id);

        taskEntry.childNodes[1].classList.toggle('completedl');
        taskEntry.childNodes[3].classList.toggle('completedr');
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
        const newTaskDueDate = document.querySelector('#task-duedate-input').value;
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

        taskName.innerText = `${name} - ${dueDate}`;

        // Remove current priority.
        taskPriority.classList.remove('task-low-priority');
        taskPriority.classList.remove('task-medium-priority');
        taskPriority.classList.remove('task-high-priority');

        taskPriority.classList.add(`task-${priority.toLowerCase()}-priority`);
    }

    static addNewProject = (name, id) => {
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
            projects[projects.length -1].insertAdjacentHTML('afterend', `
            <div class="task-filter project" data-projid="${id}">
                <span class="material-icons-outlined">description</span>
                <p>${name}</p>
            </div>
            `);
        }

        UI.#updateTaskFiltersEventListeners();
    }

    static removeModal = () => {
        const body = document.querySelector('body');
        const modal = document.querySelector('.modal-wrapper');

        body.style = "";

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
        const newTaskDueDate = document.querySelector('#task-duedate-input').value;
        const taskPriorityInput = document.querySelector('#task-priority-input');
        const newTaskPriority = taskPriorityInput.options[taskPriorityInput.selectedIndex].value;
        const taskProjectInput = document.querySelector('#task-project-input');
        const newTaskProject = taskProjectInput.options[taskProjectInput.selectedIndex].value;

        const newTask = new Task(newTaskName, newTaskDesc, newTaskDueDate, newTaskPriority);

        ToDo.addNewTask(newTask, newTaskProject);

        UI.addNewTask(newTask.getName(), newTask.getDueDate(), newTask.getPriority(),
        newTask.getId(), newTask.getStatus());

        UI.removeModal();
    }

    static addModalEventListeners = (modalType, taskId = -1) => {
        const body = document.querySelector('body');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const cancelBtn = document.querySelector('.grey-btn');
        const continueBtn = document.querySelector('.blue-btn');

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
        else if (modalType === 'taskInfo'){
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
            tasks = ToDo.getAllTasks();
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
                this.addNewTask(task.getName(), task.getDueDate(), task.getPriority(),
                task.getId(), task.getStatus());
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
        const userAccountBtn = document.querySelector('#user-acc-btn');
        const mobileLoginBtn = document.querySelector('#mobile-login-btn');
        const mobileRegisterBtn = document.querySelector('#mobile-register-btn');

        const body = document.querySelector('body');

        UI.#updateTaskFiltersEventListeners();

        addProjectBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.showNewProjectModal();
        });

        addTaskBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.showNewTaskModal();
        });

        addTaskBtnAlt.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.showNewTaskModal();
        });

        userAccountBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.showUserAccountModal();
        });

        mobileLoginBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.showMobileLoginModal();
        });

        mobileRegisterBtn.addEventListener('click', (e) => {
            body.style = "overflow-y: hidden;";
            UI.showMobileRegisterModal();
        });

        UI.#activateBurgerMenu();
    }

    static #updateProjectList() {
        const taskProjectInput = document.querySelector('#task-project-input');
        let projectNames = ToDo.getProjectNames();

        for (let i = 0; i < projectNames.length; i++) {
            if (projectNames[i] != 'default') {
                taskProjectInput.insertAdjacentHTML('beforeend', `
                <option>${projectNames[i]}</option>
                `)
            }
        }
    }

    static initHomePage() {
        UI.addHomepageEventListeners();

        let projects = ToDo.getProjects();

        projects.forEach(project => {
            if (project.getName() != 'default') {
                this.addNewProject(project.getName(), project.getId());
            }
        });

        const showAllTasks = document.querySelector('#all-tasks');

        showAllTasks.click();
    }
}