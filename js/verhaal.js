var buttonScrollDown = document.querySelector('.scroll');

buttonScrollDown.addEventListener('click', function() {
  var windowScroll = document.documentElement.clientHeight;

  (function scroll() {
    if (window.pageYOffset < windowScroll) {
      window.scrollBy({
        top: 5000,
        behavior: 'smooth'
      });
    }
  })();
});

// Wanneer je op de button met class 'scroll' klikt scrolt de pagina naar beneden
//
