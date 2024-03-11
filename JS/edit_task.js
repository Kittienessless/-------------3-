

document.getElementById('close').addEventListener('click', function(){
  document.querySelector('.bg_modal_edit_task').style.display='none';
 
});



todoList.addEventListener('click', (e)=>{
  if(e.target.classList.contains('task_container') || 
  e.target.parentElement.classList.contains('task_container') ||
  e.target.parentElement.parentElement.classList.contains('task_container')){
    document.querySelector('.bg_modal_edit_task').style.display='flex';
  }
})