var $tabContainer = document.querySelector('.tab-container');

var $tab = document.querySelectorAll('.tab');

var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', activate);

function activate(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var e = 0; e < $view.length; e++) {
      if ($dataView === $view[e].getAttribute('data-view')) {
        $view[e].className = 'view';
      } else {
        $view[e].className = 'hidden';
      }
    }
  }
}
