jQuery(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  jQuery(".clickable2").click(function() {
    $("#hide-text").slideUp();
    $("#show-text").slideToggle();
  });
});
