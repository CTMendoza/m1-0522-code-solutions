var $blueButton = document.querySelector('.blue-button');

var $orangeButton = document.querySelector('.flex-row-modal.hidden');

$blueButton.addEventListener('click', toOrangeButton);

$orangeButton.addEventListener('click', exitOrangelButton);

function toOrangeButton(event) {
  $orangeButton.className = 'flex-row-modal';
}

function exitOrangelButton(event) {
  $orangeButton.className = 'flex-row-modal hidden';
}
