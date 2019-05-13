// navbar 2019.04.08
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });
//
  /*----------------------------------------------------*/
  /*  Sticky Menu bar Scroll effect
  /*----------------------------------------------------*/
  var pxTocImg = 390; // height on which the button will show
  var pxToc = 0;

  $(window).scroll(function(){
    // for post with featured image
    if($(window).scrollTop() < pxTocImg){
      $("#toc-img").addClass('is-absolute');
      $("#toc-img").removeClass('is-fixed');
    }
    if($(window).scrollTop() >= pxTocImg){
      $("#toc-img").removeClass('is-absolute');
      $("#toc-img").addClass('is-fixed');
    }

    // for post without featured image
    // if($(window).scrollTop() < pxToc){
    //   $("#toc").addClass('is-absolute');
    //   $("#toc").removeClass('is-fixed');
    // }
    // if($(window).scrollTop() >= pxToc){
    //   $("#toc").removeClass('is-absolute');
    //   $("#toc").addClass('is-fixed');
    // }
  });

  //$('#flag a').on('click',function(){
//	$("#float-canvas").removeClass('float-canvas-show');
  //  return false;
  //});