/*----------------------------------------------------*/
/*  TOC Settings 2019.05.18
/*----------------------------------------------------*/

// sticky navbar
$(window).scroll(function(){ // need to be fixed
    // get var show_toc
    if (typeof show_toc == 'undefined') {
        var toc = false; //default: false
    }else{
        var toc = show_toc;
    };
    // remove sticky navbar for TOC-enabled post (Deprecated since v0.3.0)
    // if(toc){
    //     $("html").removeClass('has-spaced-navbar-fixed-top'); // remove top space
    //     $("#navbar").removeClass('is-fixed-top'); // disable sticky top
    // };
});

// Sticky TOC Scroll effect + 2019.05.12 -> 2019.05.13
$(window).scroll(function(){
    var pxTocImg = 400; //offset, maybe use more elegant way later
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
