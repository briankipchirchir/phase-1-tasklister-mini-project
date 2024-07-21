// index.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-task-form');
    const taskList = document.getElementById('task-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
    
      const taskInput = document.getElementById('new-task-description');
      const taskDescription = taskInput.value;
  

      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;
  
      taskList.appendChild(taskItem);
  
      // Reset the input field after adding task
      taskInput.value = '';
    });
  });
  