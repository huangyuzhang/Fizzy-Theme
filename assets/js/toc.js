/*----------------------------------------------------*/
/*  TOC Settings | Updated: 2019.05.25
/*----------------------------------------------------*/

// get var show_toc
if (typeof show_toc == 'undefined') {
    var show_toc = false; //default: false
};
// hide toc background by default
if (!show_toc){$("#toc").hide()};

// Sticky TOC Scroll effect + 2019.05.12 -> 2019.05.13
$(window).scroll(function(){
    var pxTocImg = 400; //offset, maybe use a more elegant way later
    // for post with featured image
    if($(window).scrollTop() < pxTocImg){
        $("#toc-img").addClass('is-absolute');
        $("#toc-img").removeClass('is-fixed');
    }
    if($(window).scrollTop() >= pxTocImg){
        $("#toc-img").removeClass('is-absolute');
        $("#toc-img").addClass('is-fixed');
    }
});
