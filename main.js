$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".navbar").addClass("affix");
    console.log("OK");
  } else {
    $(".navbar").removeClass("affix");
  }
});

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
