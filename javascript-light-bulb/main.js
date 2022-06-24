var storeClicks = 0;
var $lightOn = document.querySelector('.lightbulb');
var $bgOn = document.querySelector('.background-color-yellow');

// $lightOn.addEventListener('click', ) event listenter for click event

function buttonSwitch(event) {
  storeClicks++;
  if (storeClicks % 2 === 0) {
    $lightOn.className = 'lightbulb yellow';
    $bgOn.className = 'background-color-yellow';
  } else {
    $lightOn.className = 'lightbulb black';
    $bgOn.className = 'background-color-black';
  }
}

$lightOn.addEventListener('click', buttonSwitch);
