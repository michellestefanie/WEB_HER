var button = document.querySelector('main > section > button');

var form = document.querySelector('.filters');
button.addEventListener('click', function() {
  console.log("Doet ie het");
  form.classList.toggle('block');
});

// Voegt de class 'block' toe of verwijderd hem van het element .filters
