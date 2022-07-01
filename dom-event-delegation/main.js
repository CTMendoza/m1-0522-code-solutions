var $taskList = document.querySelector('.task-list');

function $editTask(event) {
  console.log('event.target ', event.target);
  console.log('event.target.tagName ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $taskItem = event.target.closest('.task-list-item');
    console.log('Closest .task-list-item ', $taskItem);
    $taskItem.remove();
  }
}

$taskList.addEventListener('click', $editTask);
