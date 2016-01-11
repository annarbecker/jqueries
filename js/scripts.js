jQuery(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });
  
  jQuery("h2").dblclick(function() {
    alert("This is a second header.");
  });

  jQuery(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});
