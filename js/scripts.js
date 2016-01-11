jQuery(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery("p").click(function() {
    alert("This is a paragraph.");
  });

  jQuery("h2").dblclick(function() {
    alert("This is a second header.");
  });

  jQuery("img").hover(function() {
    alert("LOOK AT THESE PIGS!");
  });
});
