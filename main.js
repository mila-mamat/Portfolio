//activating navbar shadow and padding transition when scrolling down
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".navbar").addClass("affix");
    console.log("OK");
  } else {
    $(".navbar").removeClass("affix");
  }
});

// activating nav-trigger animation
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
});

//scroll back to the intro page when the website is refreshed
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//send email through emailJS
(function () {
  emailjs.init("user_pivJCnErDyKJKYJspkSQO");
})();

let myform = $("#contact-form");
myform.submit(function (event) {
  event.preventDefault();

  const params = myform.serializeArray().reduce(function (obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});


  const service_id = "gmail";
  const template_id = "template_9sGA3NXh";

  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params).then(
    function () {
      myform.find("button").text("Send");
      myform[0].reset();
    },
    function (err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
    }
  );

  return false;
});
