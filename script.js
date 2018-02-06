$(document).ready(function() {
    var table;
  $(".table").on("click", function() {
    $(".reservations").toggleClass("show")
     table= $(event.target);
  })
  $("#Save").on("click", function() {
    table.addClass('selected');
  $(".reservations").toggleClass("show")
  })





});
