$(document).ready(function() {
  $("#postcard-form").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name").val();
    $("#insert-name").text(userName);
    $("#postcard").show();
  });
});
