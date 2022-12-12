$(document).on("mousemove", function (event) {
  $(".top-left").css("width", event.pageX);
  $(".top-left").css("height", event.pageY);

  $(".top-right").css("width", $(window).width() - event.pageX);
  $(".top-right").css("height", event.pageY);

  $(".bottom-left").css("width", event.pageX);
  $(".bottom-left").css("height", $(window).height() - event.pageY);

  $(".bottom-right").css("width", $(window).width() - event.pageX);
  $(".bottom-right").css("height", $(window).height() - event.pageY);
});
