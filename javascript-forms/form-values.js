var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  var newObject = {};
  event.preventDefault();
  var $name = $contactForm.elements.name.value;
  var $email = $contactForm.elements.email.value;
  var $message = $contactForm.elements.message.value;
  Object.assign(newObject, { name: $name, email: $email, message: $message });
  console.log('newObject: ', newObject);
  $contactForm.reset();
}
