
const project_Form=document.querySelector('#add_project');
const projectList=document.querySelector('.list_of_projects');
const nameInput=document.querySelector('#create_project_form input');
const myform=document.querySelector('#create_project_form ');

let projects = JSON.parse(localStorage.getItem('projects')) || []


if(localStorage.getItem(projects)){
  projects.map((project)=>{
    createProject(project)
  })
}

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

function createProject(project){
  const projectEl=document.createElement('li')
  projectEl.setAttribute('id', project.id)


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


