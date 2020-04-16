(function ($) {
  "use strict";

  $("#send").on("click", function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const subject = $("#subject").val();
    const msg = $("#msg").val();
    console.log(name, email, subject, msg);
    if (name && email && subject && msg) {
      $("#contact-us-form").hide();
      $("#contact-us-failure").hide();
      $("#contact-us-success").show();
      firebase.firestore().collection("CONTACT_US_FORM_SUBMITTED").add({
        name,
        email,
        subject,
        msg,
      });
    } else {
      $("#contact-us-failure").show();
    }
    return false;
  });
})(jQuery);
