var $allSpans = document.querySelectorAll('span');

var keyCount = 0;

function $keyPress(event) {
  if ($allSpans[keyCount].textContent === event.key) {
    $allSpans[keyCount].className = 'correct';
    keyCount++;
    $allSpans[keyCount].className = 'under-line';
  } else {
    $allSpans[keyCount].className = 'wrong';
  }
}

document.addEventListener('keydown', $keyPress);
