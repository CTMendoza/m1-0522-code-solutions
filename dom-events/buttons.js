function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log('event.target', event.target);
}

var $clickbutton = document.querySelector('.click-button');

$clickbutton.addEventListener('click', handleClick, false);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log('event.target', event.target);
}

var $hoverOver = document.querySelector('.hover-button');

$hoverOver.addEventListener('mouseover', handleMouseOver, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
var $doubleClick = document.querySelector('.double-click-button');
$doubleClick.addEventListener('dblclick', handleDoubleClick, false);
