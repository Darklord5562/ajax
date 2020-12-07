$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(".sidebar").addClass("show-sidebar");
    $("#overlay").addClass("overlay");
  });
  $("#overlay").click(function() {
    $(this).removeClass("overlay");
    $("#notice").removeClass("notice");
    $(".sidebar").removeClass("show-sidebar");
  });
  $(".x-btn").click(function() {
    $("#overlay").removeClass("overlay");
    $("#notice").removeClass("notice");
    $(".sidebar").removeClass("show-sidebar");
  });
  $(".notice-btn").click(function() {
    $("#overlay").addClass("overlay");
    $("#notice").addClass("notice");
    $("#notice").css("display", "block");
  });
  $(".fa-eye-slash").click(function() {
    $(this).toggleClass("fa-eye");
    $(this).attr('data', 'danger');
    $(this).toggleClass("fa-eye-slash");
    if ($("#password").attr("type") === "password") {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });
});






/*
   $(".menu-toggle").click(function() {
    $(".sidebar").addClass("show-sidebar");
    $("#overlay").toggleClass("overlay");
  });
  $("#overlay").click(function() {
    $(this).toggleClass("overlay");
    $(".sidebar").removeClass("show-sidebar");
    $(".notice").toggleClass("display-none");
  });

  $("#tgl-sidebar").click(function() {
    $("#sidebar").toggleClass("show-sidebar");
    $("#overlay").toggleClass("overlay");
  });
  $(".fa-eye-slash").click(function() {
    $(this).toggleClass("fa-eye");
    $(this).toggleClass("fa-eye-slash");
    if ($("#password").attr("type") === "password") {
      $("#password").attr("type", "text");
    } else {
      $("#password").attr("type", "password");
    }
  });

*/