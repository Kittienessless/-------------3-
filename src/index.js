
const project_Form=document.querySelector('#add_project');
const projectList=document.querySelector('.list_of_projects');
const nameInput=document.querySelector('#create_project_form input');
const myform=document.querySelector('#create_project_form ');

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

const todoForm=document.querySelector('#todo_form');
const todoList=document.querySelector('.todos');
const mainInput=document.querySelector('#todo_form input');
let projects = JSON.parse(localStorage.getItem('projects')) || []


document.getElementById('add_project_btn').addEventListener('click', function(){
  document.querySelector('.bg_modal_create_project').style.display='flex';
});
///create project 
function createProject(project){
  const projectEl=document.createElement('li')
  projectEl.setAttribute('id', project.id)
  project_Form.addEventListener('click', (e) =>{

  
  e.preventDefault()
  const inputValue=nameInput.value 

  if(inputValue==''){
    return
  }

  const project = {
    id: new Date().getTime(),
    name:inputValue,
    isCompleted:false
  }
  projects.push(project)
  localStorage.setItem('project', JSON.stringify(projects))

  createProject(project)
  document.querySelector('.bg_modal_create_project').style.display='none';
  myform.reset()
  nameInput.focus()


})

//слушатель событий на форму todo
todoForm.addEventListener('keypress', (e) =>{

  if (e.key==='Enter'){
    e.preventDefault()
    const inputValue=mainInput.value 
  
    if(inputValue==''){
      return
    }
  
    const task = {
      id: new Date().getTime(),
      name:inputValue,
      isCompleted:false
    }
    tasks.push(task)
    localStorage.setItem('task', JSON.stringify(tasks))

    createTask(task)
    todoForm.reset()
    mainInput.focus()
  }
  
})


document.getElementById('close_x').addEventListener('click', function(){
  document.querySelector('.bg_modal_create_project').style.display='none';
 
});


document.getElementById('close').addEventListener('click', function(){
  document.querySelector('.bg_modal_edit_task').style.display='none';
 
});

const projectEllMarkup = `
  <div class="project_item ">
  <div class="project_pic">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 80 80" width="80px" height="80px">
        <path style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;"
          d="M44,68c0,2.209-1.791,4-4,4s-4-1.791-4-4" />
        <path style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;"
          d="M50,56H30v8c0,2.209,1.791,4,4,4h12c2.209,0,4-1.791,4-4V56z" />
        <circle cx="57" cy="30" r="1" />
        <circle cx="23" cy="30" r="1" />
        <circle cx="40" cy="13" r="1" />
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -3.4186 30.2417)" cx="54.722" cy="21.5" rx="1"
          ry="1" />
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -15.8634 17.7968)" cx="25.278" cy="38.5" rx="1"
          ry="1" />
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -3.4186 17.7968)" cx="31.5" cy="15.278" rx="1"
          ry="1" />
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 11.0192 49.641)" cx="48.5" cy="15.278" rx="1"
          ry="1" />
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -5.9808 66.641)" cx="54.722" cy="38.5" rx="1"
          ry="1" />
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -5.9808 32.641)" cx="25.278" cy="21.5" rx="1"
          ry="1" />
        <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -4.7033 15.4751)" cx="56.421" cy="25.6"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -8.0999 7.2749)" cx="23.579" cy="34.4"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -2.3015 9.6767)" cx="35.6" cy="13.579"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 2.5233 42.0503)" cx="52.021" cy="17.979"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -21.5183 32.0919)" cx="27.979" cy="42.021"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.4767 49.0919)" cx="52.021" cy="42.021"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.5183 25.0503)" cx="27.979" cy="17.979"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 19.7918 52.9517)" cx="44.4" cy="13.579"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 8.5902 79.9948)" cx="56.421" cy="34.4"
          rx="1" ry="1" />
        <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -7.2513 41.7501)" cx="23.579" cy="25.6"
          rx="1" ry="1" />
        <line style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" x1="37" y1="60"
          x2="50" y2="60" />
        <line style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" x1="30" y1="60"
          x2="35" y2="60" />
        <line style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" x1="37" y1="64"
          x2="50" y2="64" />
        <line style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;" x1="30" y1="64"
          x2="35" y2="64" />
        <path style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;"
          d="M30,56v-2c0-7-12-10-12-24c0-12.15,9.85-22,22-22s22,9.85,22,22c0,14-12,17-12,24v2" />
        <g>
          <g>
            <path style="fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;"
              d="M43,28c-1.657,0-3,1.343-3,3c0-1.657-1.343-3-3-3s-3,1.343-3,3s1.343,3,3,3v22h6V34c1.657,0,3-1.343,3-3S44.657,28,43,28z" />
          </g>
        </g>
      </svg>
    </div>

  </div>
  <span class="project_name">${project.name}</span>
</div>

  `

  projectEl.innerHTML=projectEllMarkup

  projectList.appendChild(projectEl)
}

if(localStorage.getItem(projects)){
  projects.map((project)=>{
    createProject(project)
  })
}



if(localStorage.getItem(tasks)){
  tasks.map((task)=>{
    createTask(task)
  })
}



///create task 
function createTask(task){
  const taskEl=document.createElement('li')
  taskEl.setAttribute('id', task.id)
  if(task.isCompleted){
    taskEl.classList.add('complete')
  }
  todoList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('task_container') || 
    e.target.parentElement.classList.contains('task_container') ||
    e.target.parentElement.parentElement.classList.contains('task_container')){
      document.querySelector('.bg_modal_edit_task').style.display='flex';
    }
  })

  todoList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('task_btn_task') || 
    e.target.parentElement.classList.contains('task_btn_task') ||
    e.target.parentElement.parentElement.classList.contains('task_btn_task')
    
    ){
      const taskId=e.target.closest('li').id
      removeTask(taskId)
    }
  
  })
  const taskElMarkup = `

  <div class="task_container">
    <div class="task_box ">
      <div class="task_main row">
      <span ${!task.isCompleted ? 'contenteditable' : ''}>${task.name}</span>
    <div class="task_btns row">
        <div>
          <input type="checkbox" name="tasks" id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
        </div>
      <button title="remove the "${task.name} task"  class="remove_task">
        <div class="task_btn_task">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.2466 21.9999C10.8916 21.9999 9.5706 21.9849 8.2636 21.9579C6.5916 21.9249 5.4346 20.8409 5.2456 19.1289C4.9306 16.2889 4.3916 9.59491 4.3866 9.52791C4.3526 9.11491 4.6606 8.75291 5.0736 8.71991C5.4806 8.70891 5.8486 8.99491 5.8816 9.40691C5.8866 9.47491 6.4246 16.1459 6.7366 18.9639C6.8436 19.9369 7.3686 20.4389 8.2946 20.4579C10.7946 20.5109 13.3456 20.5139 16.0956 20.4639C17.0796 20.4449 17.6116 19.9529 17.7216 18.9569C18.0316 16.1629 18.5716 9.47491 18.5776 9.40691C18.6106 8.99491 18.9756 8.70691 19.3846 8.71991C19.7976 8.75391 20.1056 9.11491 20.0726 9.52791C20.0666 9.59591 19.5246 16.3069 19.2126 19.1219C19.0186 20.8689 17.8646 21.9319 16.1226 21.9639C14.7896 21.9869 13.5036 21.9999 12.2466 21.9999"
                fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.708 6.98926H3.75C3.336 6.98926 3 6.65326 3 6.23926C3 5.82526 3.336 5.48926 3.75 5.48926H20.708C21.122 5.48926 21.458 5.82526 21.458 6.23926C21.458 6.65326 21.122 6.98926 20.708 6.98926"
                fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.4403 6.98924C16.3023 6.98924 15.3143 6.17824 15.0903 5.06224L14.8473 3.84624C14.7963 3.66124 14.5853 3.50024 14.3453 3.50024H10.1123C9.87233 3.50024 9.66133 3.66124 9.60033 3.89224L9.36733 5.06224C9.14433 6.17824 8.15533 6.98924 7.01733 6.98924C6.60333 6.98924 6.26733 6.65324 6.26733 6.23924C6.26733 5.82524 6.60333 5.48924 7.01733 5.48924C7.44333 5.48924 7.81333 5.18524 7.89733 4.76724L8.14033 3.55124C8.38733 2.61924 9.19433 2.00024 10.1123 2.00024H14.3453C15.2633 2.00024 16.0703 2.61924 16.3073 3.50624L16.5613 4.76724C16.6443 5.18524 17.0143 5.48924 17.4403 5.48924C17.8543 5.48924 18.1903 5.82524 18.1903 6.23924C18.1903 6.65324 17.8543 6.98924 17.4403 6.98924"
                fill="black" />
            </svg>

          </div>
      </button>

    </div>
  </div>



</div>


</div> 

  


  
  `

  taskEl.innerHTML=taskElMarkup

  todoList.appendChild(taskEl)
}



function removeTask(taskId) {
  tasks=tasks.filter((task)=> task.id!==parseInt(taskId))
  localStorage.setItem('tasks',JSON.stringify(tasks))

  document.getElementById(taskId).remove()
}




