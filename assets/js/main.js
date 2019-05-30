// header: navbar Burgers 2019.04.08
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

// =================================================
// post archive: add year and month break 2019.05.28
// =================================================
// Year Break
var yearArray = new Array();
$(".post-archive-item").each(function() {
    var archivesYear = $(this).attr("year");
    yearArray.push(archivesYear);
});
var uniqueYear = $.unique(yearArray);
for (var i = 0; i < uniqueYear.length; i++) {
    var html = "<hr><h2>" + uniqueYear[i] + "</h2>";
    $("[year='" + uniqueYear[i] + "']:first").before(html);
}
// Month Break
var monthArray = new Array();
$(".post-archive-item").each(function() {
    var archivesMonth = $(this).attr("month");
    monthArray.push(archivesMonth);
});
var uniqueMonth = $.unique(monthArray);
for (var i = 0; i < uniqueMonth.length; i++) {
    var html = "<h4>" + uniqueMonth[i] + "</h4>";
    $("[month='" + uniqueMonth[i] + "']:first").before(html);
}
// =================================================
// search 2019.05.30
// =================================================
if (typeof show_search == 'undefined') {
  var show_search = false;
}
if (!show_search) {
  $("#search-btn").hide();
}
$("#search-btn").click(function() {
    // $("#search-input").val("");
    $("#seach-form").fadeIn();
    $("#search-btn").hide()
    $('#search-input').focus();
    $("#search-results").show();
});
$("#close-btn").click(function() {
  $("#seach-form").hide(); //hide search form
  $("#search-results").hide(); //hide all results
  $("#search-btn").fadeIn(); // show search button
  // $("#search-input").val(""); //clear search field text  
});