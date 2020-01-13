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

// Veranderen van button state
var likeButton = document.querySelector('.like-story')
var likeImage = document.querySelector('.like-image')
var likeState = false;

likeButton.addEventListener('click', function() {
  if (likeState == false) {
    likeImage.src = 'images/favoriet-gevuld.svg'
    likeState = true
  } else {
    likeImage.src = 'images/favoriet.svg'
    likeState = false
  }
})



// Wanneer je op de button met class 'scroll' klikt scrolt de pagina naar beneden
//
