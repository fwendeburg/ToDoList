class UI {
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
                            <input type="text">
                        </div>
                        <div class="task-property">
                            <label>Description</label>
                            <br>
                            <textarea id="new-task-description"></textarea>
                        </div>
                    </div>
                    <div class="new-task-modal-right-panel">
                        <div class="task-property">
                            <label>Due date</label>
                            <br>
                            <input type="date">
                        </div>
                        <div class="task-property">
                            <label>Priority</label>
                            <br>
                            <select>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <div class="task-property">
                            <label>Project</label>
                            <br>
                            <select>
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

        this.addModalEventListeners();
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
                        <input type="text">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="cancel-btn">Close</button>
                    <button class="continue-btn">Add project</button>
                </div>
            </div>
        </div>`
        );

        UI.addModalEventListeners();
    }

    static showEditTaskModal = (name, description, dueDate, priority) => {
        const body = document.querySelector('body');

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
                            <input type="text" value="${name}">
                        </div>
                        <div class="task-property">
                            <label>Description</label>
                            <br>
                            <textarea id="new-task-description">${description}</textarea>
                        </div>
                    </div>
                    <div class="new-task-modal-right-panel">
                        <div class="task-property">
                            <label>Due date</label>
                            <br>
                            <input type="date" value="${dueDate}">
                        </div>
                        <div class="task-property">
                            <label>Priority</label>
                            <br>
                            <select>
                                <option ${(priority === 'Low')? 'selected="selected"' : ''}>Low</option>
                                <option ${(priority === 'Medium')? 'selected="selected"' : ''}>Medium</option>
                                <option ${(priority === 'High')? 'selected="selected"' : ''}>High</option>
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

        UI.addModalEventListeners();
    }

    static showTaskInfoModal = (name, description, dueDate, priority) => {
        const body = document.querySelector('body');

        body.insertAdjacentHTML('beforeend', `
        <div class="modal-wrapper">
            <div class="show-task-modal">
                <div class="modal-header">
                    <h4>${name}</h4>
                </div>

                <div class="properties">
                    <div class="show-task-modal-left-panel">
                        <div class="task-property">
                            <p class="property-title">Title:</p>
                            <p>${name}</p>
                        </div>
                        <div class="task-property">
                            <p class="property-desc">Description:</p>
                            <p>${description}</p>
                        </div>
                    </div>
                    <div class="show-task-modal-right-panel">
                        <div class="task-property">
                            <p class="property-due-date">Due date:</p>
                            <p>${dueDate}</p>
                        </div>
                        <div class="task-property">
                            <p class="property-priority">Priority:</p>
                            <p>${priority}</p>
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

        UI.addModalEventListeners();
    }

    static addNewTask = (name, dueDate, priority, id) => {
        const content = document.querySelector('.content');

        content.insertAdjacentHTML('beforeend', `
        <div class="task" data-taskid ="${id}">
                <div class="left-panel">
                    <input type="checkbox" class="task-finished">
                    <label>${name} - ${dueDate}</label>
                </div>

                <div class="right-panel">
                    <span class="material-icons-outlined edit-task-btn" data-taskid ="${id}">edit</span>
                    <span class="material-icons delete-task-btn" data-taskid ="${id}">delete_outline</span>
                    <span class="material-icons task-${priority.toLowerCase()}-priority">circle</span>
                </div>
            </div>
        </div>`
        );

        // Do the same for editTaskBtn.
        const deleteTaskBtns = document.querySelectorAll('.delete-task-btn');
        let deleteTaskBtn;

        for (let i = 0; i < deleteTaskBtns.length; i++) {
            if (deleteTaskBtns[i].dataset.taskid == id) {
                deleteTaskBtn = deleteTaskBtns[i];
                break;
            };
        }

        deleteTaskBtn.addEventListener('click', (e) => {
            UI.removeTask(e.target.dataset.taskid);
        })
    }

    static addNewProject = (name, id) => {
        const projects = document.getElementsByClassName('project');

        projects[projects.length -1].insertAdjacentHTML('afterend', `
        <div class="task-filter selected project" data-projid="${id}">
            <span class="material-icons-outlined">description</span>
            <p>${name}</p>
        </div>
        `);
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

    static addModalEventListeners = () => {
        const body = document.querySelector('body');
        const modalWrapper = document.querySelector('.modal-wrapper');
        const cancelBtn = document.querySelector('.cancel-btn');

        modalWrapper.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal-wrapper')) {
                UI.removeModal();
            }
        })

        body.addEventListener('keydown', UI.#handleModalEventEsc);

        cancelBtn.addEventListener('click', () => {
            UI.removeModal();
        })
    }

    static #removeModalEventListeners = () => {
        const body = document.querySelector('body');

        body.removeEventListener('keydown', UI.#handleModalEventEsc);
    }

    static #showFilterSelection = (selectedBtn, btnNodeList) => {
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
    }

    static addBodyEventListeners = () => {
        const addTaskBtn = document.querySelector('#add-task-btn');
        const addTaskBtnAlt = document.querySelector('#add-task-btn-alt');
        const addProjectBtn = document.querySelector('.add-project-btn');
        const taskFilters = document.querySelectorAll('.task-filter');

        taskFilters.forEach(filter => filter.addEventListener('click', (e) => {
            UI.#showFilterSelection(e.currentTarget, taskFilters);
        }));

        addProjectBtn.addEventListener('click', (e) => {
            UI.showNewProjectModal();
        });

        addTaskBtn.addEventListener('click', (e) => {
            UI.showNewTaskModal();
        });

        addTaskBtnAlt.addEventListener('click', (e) => {
            UI.showNewTaskModal();
        });
    }
}