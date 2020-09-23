displayTasks();
var addTaskPlus = document.querySelector('.task-add-center').addEventListener('click', addTaskPlus);
var editStatus = document.querySelector('#tasks-container').addEventListener('click', editStatus);
var saveTask = document.querySelector('#container').addEventListener('click', saveTask);
var columnMenu = document.querySelector('#menu-column').addEventListener('click', menuColumn);

function addTaskPlus(){
	var taskBox = document.querySelector('#tasks-container');
	var createTaskBox = document.createElement('div');
	createTaskBox.className = 'task-box';

	var addTask = document.querySelector('.task-add');
	addTask.remove();

	var taskTitle = document.createElement('div');
	taskTitle.className = 'task-title';
	var inputTitle = document.createElement('input');
	inputTitle.className = 'title';
	inputTitle.setAttribute('placeholder', 'Ingresa un titulo.');
	inputTitle.setAttribute('maxlength', '30');
	var threeDots = document.createElement('img');
	threeDots.setAttribute('src', './img/three-dots.png');
	threeDots.className = 'three-dots';
	taskTitle.appendChild(inputTitle);
	taskTitle.appendChild(threeDots);
	taskBox.lastElementChild.appendChild(taskTitle);

	var taskContent = document.createElement('div');
	taskContent.className = 'task-content';
	var statusCircle = document.createElement('img')
	statusCircle.setAttribute('src', './img/circle-line.png');
	statusCircle.className = 'status-circle';
	var inputContent = document.createElement('input');
	inputContent.className = 'content-task';
	inputContent.setAttribute('placeholder', 'Tu tarea')
	inputContent.setAttribute('maxlength', '12');
	var commentaryArrow = document.createElement('img')
	commentaryArrow.setAttribute('src', './img/angle-circle-down.png');
	commentaryArrow.className = 'commentary-arrow';
	var statusContent = document.createElement('div');
	statusContent.className = 'status';
	var statusSpan = document.createElement('span');	
	statusSpan.innerText = 'ESTADO';
	statusSpan.classList = 'delegation-span';
	statusContent.appendChild(statusSpan);
	var statusEdit = document.createElement('div');
	statusEdit.className = 'edit-status';
	statusContent.appendChild(statusEdit);
	var statusInProgress = document.createElement('span');
	statusInProgress.innerText = 'EN PROGRESO';
	statusInProgress.className = 'status-in-progress';
	var statusCompleted = document.createElement('span');
	statusCompleted.innerText = 'COMPLETADO';
	statusCompleted.className = 'status-completed';
	var statusUrgent = document.createElement('span');
	statusUrgent.innerText = 'URGENTE';
	statusUrgent.className = 'status-urgent'
	statusEdit.appendChild(statusInProgress);
	statusEdit.appendChild(statusCompleted);
	statusEdit.appendChild(statusUrgent);


	var commentaryContent = document.createElement('div');
	commentaryContent.className = 'commentary-content';
	var commentaryTask = document.createElement('span');
	commentaryTask.className = 'commentary-task';
	commentaryContent.appendChild(commentaryTask);
	taskContent.appendChild(statusCircle);
	taskContent.appendChild(inputContent);
	taskContent.appendChild(commentaryArrow);
	taskContent.appendChild(statusContent);
	taskContent.appendChild(commentaryContent);


	var taskButton = document.createElement('div');
	taskButton.className = 'task-button';
	var saveButton = document.createElement('input');
	saveButton.className = 'save save-button';
	saveButton.setAttribute('type', 'submit');
	saveButton.value = 'GUARDAR';
	taskButton.appendChild(saveButton);
	

	taskBox.lastElementChild.appendChild(taskContent);
	taskBox.lastElementChild.appendChild(taskButton);
	createTaskBox.appendChild(addTask);
	taskBox.appendChild(createTaskBox);
	console.log('cread');
}

function editStatus(e){
	if(e.target.classList.contains('status')){
		e.target.lastElementChild.style.display = 'flex';
		e.target.lastElementChild.children[0].addEventListener('click', changeStatus);
		e.target.lastElementChild.children[1].addEventListener('click', changeStatus);
		e.target.lastElementChild.children[2].addEventListener('click', changeStatus);
	}
	else if(e.target.classList.contains('delegation-span')){
		e.target.nextElementSibling.style.display = 'flex';
		e.target.nextElementSibling.children[0].addEventListener('click', changeStatus);
		e.target.nextElementSibling.children[1].addEventListener('click', changeStatus);
		e.target.nextElementSibling.children[2].addEventListener('click', changeStatus);
	}
}

function changeStatus(event){
	if(event.target.classList.contains('status-in-progress')){
		event.target.parentElement.previousElementSibling.innerText = 'EN PROGRESO';
		event.target.parentElement.previousElementSibling.style.fontSize = '12px';
		event.target.parentElement.parentElement.className = 'status status-in-progress';
		event.target.parentElement.parentElement.parentElement.firstElementChild.setAttribute('src', './img/blue-circle.png')		
		event.target.parentElement.style.display = 'none'
	}
	else if(event.target.classList.contains('status-completed')){
		event.target.parentElement.previousElementSibling.innerText = 'COMPLETADO';
		event.target.parentElement.previousElementSibling.style.fontSize = '12px';		
		event.target.parentElement.parentElement.className = 'status status-completed';
		event.target.parentElement.parentElement.parentElement.firstElementChild.setAttribute('src', './img/green-circle.png')
		event.target.parentElement.style.display = 'none'
	}
	else if(event.target.classList.contains('status-urgent')){
		event.target.parentElement.previousElementSibling.innerText = 'URGENTE';
		event.target.parentElement.previousElementSibling.style.fontSize = '12px';		
		event.target.parentElement.parentElement.className = 'status status-urgent';
		event.target.parentElement.parentElement.parentElement.firstElementChild.setAttribute('src', './img/red-circle.png')
		event.target.parentElement.style.display = 'none'
	}
}

function saveTask(e){
	if(e.target.classList.contains('save')){
		var test = e.target.parentElement.previousElementSibling.children[3].firstElementChild
		if(e.target.parentElement.parentElement.firstElementChild.firstElementChild.value != '' && e.target.parentElement.parentElement.children[1].children[1].value != '' && test.innerText === 'COMPLETADO' || test.innerText === 'URGENTE' || test.innerText === 'EN PROGRESO'){
			var succesful = document.querySelector('.green-cells');
			succesful.style.display = 'flex';
			setTimeout(function(){
				succesful.style.display = 'none'
			}, 2000);
			var titleSpan = document.createElement('span');
			titleSpan.className = 'title';
			var titleValue = e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.value
			titleSpan.textContent = titleValue;
			e.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.remove()
			var referenceTitle = e.target.parentElement.previousElementSibling.previousElementSibling.children[0]
			e.target.parentElement.previousElementSibling.previousElementSibling.insertBefore(titleSpan,referenceTitle);
			var taskSpan = document.createElement('span');
			taskSpan.className = 'content-task';
			var taskValue = e.target.parentElement.previousElementSibling.children[1].value;
			taskSpan.textContent = taskValue;
			e.target.parentElement.previousElementSibling.children[1].remove();
			var referenceTask = e.target.parentElement.previousElementSibling.children[1];
			e.target.parentElement.previousElementSibling.insertBefore(taskSpan, referenceTask);
			var taskContainer = e.target.parentElement.parentElement.parentElement;
			e.target.style.display = 'none';
			localStorage.clear();
			localStorage.setItem('taskSaved', taskContainer.innerHTML);
		} else {
			var empty = document.querySelector('.empty-cells');
			empty.style.display = 'flex';
			setTimeout(function(){
				empty.style.display = 'none'
			}, 2000);
		}
	}if(e.target.classList.contains('delete')){
		if(confirm('¿Estas seguro que deseas borrar esa tarea?')){
			taskContainer = document.querySelector('#tasks-container');
			e.target.parentElement.parentElement.remove();
			localStorage.clear();
			localStorage.setItem('taskSaved', taskContainer.innerHTML);
		} else{
			e.target.style.display = 'none';
		}
	}
}


function displayTasks(){
	if (localStorage.getItem('taskSaved') === null){
		var taskBox = document.querySelector('.task-box');
	} else{
		var taskSaved = localStorage.getItem('taskSaved');
		var taskContainer = document.querySelector('#tasks-container');
		taskContainer.innerHTML = taskSaved;
		taskContainer.lastElementChild.remove();
		var taskAdd = document.createElement('div');
		taskAdd.className = 'task-box'
		var taskAddBox = document.createElement('div');
		taskAddBox.className = 'task-add'
		var taskAddBoxCenter = document.createElement('div');
		taskAddBoxCenter.className = 'task-add-center';
		var taskAddImg = document.createElement('img');
		taskAddImg.setAttribute('src', './img/plus-round-line.png');
		taskAddBoxCenter.appendChild(taskAddImg);
		taskAddBox.appendChild(taskAddBoxCenter);
		taskAdd.appendChild(taskAddBox);
		taskContainer.appendChild(taskAdd);
	}
}

function menuColumn(e){
	if(e.target.id === 'edit-task'){
		var taskBox = document.querySelectorAll('.task-box');
		for (var i = 0; i < taskBox.length - 1; i++) {
			taskBox[i].lastElementChild.firstElementChild.style.display = 'inline';
			var taskTitle = taskBox[i].firstElementChild.firstElementChild;
			var titleValue = taskTitle.innerText;
			var taskTitleParent = taskBox[i].firstElementChild;
			var taskContent = taskBox[i].children[1].children[1];
			var contentValue = taskContent.innerText;
			var taskContentParent = taskBox[i].children[1];
			var input = document.createElement('input');
			input.setAttribute('placeholder', 'Ingresa un titulo');
			input.setAttribute('maxlength', '30');
			input.value = titleValue
			var inputContent = document.createElement('input');
			inputContent.className = 'content-task';
			inputContent.value = contentValue;
			inputContent.setAttribute('placeholder', 'Tu tarea');
			inputContent.setAttribute('maxlength', '12');
			taskContentParent.replaceChild(inputContent, taskContent);
			taskTitleParent.replaceChild(input, taskTitle);
		}
	}
	else if(e.target.id === 'my-task'){
		var taskBox = document.querySelectorAll('.task-box');
		for (var i = 0; i < taskBox.length - 1; i++) {
			taskBox[i].lastElementChild.firstElementChild.style.display = 'none';
			taskBox[i].lastElementChild.lastElementChild.style.display = 'none';
		}

	}
	else if(e.target.id === 'remove-task'){
		var taskBox = document.querySelectorAll('.task-box');
		for (var i = 0; i < taskBox.length - 1; i++) {
			deleteButton = document.createElement('input');
			deleteButton.setAttribute('type','submit');
			deleteButton.value = 'BORRAR';
			deleteButton.className = 'delete save-button';
			taskBox[i].lastElementChild.appendChild(deleteButton);
		}
	}

}
