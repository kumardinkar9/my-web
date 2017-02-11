jQuery(function($) {
  // Contact Submit - Start
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    $('.sk-fading-circle-loader').show();
    $.ajax({
      type: "POST",
      url: "/mailer.php",
      data: $(this).serialize(),
      dataType: 'html',
      success: function(result) {
        if (result == 'Success') {
          $('.sk-fading-circle-loader').hide();
          $('div.darkOverlay').css('display', 'block');
        } else {
          $('.sk-fading-circle-loader').hide();
        }
        $("#contactForm")[0].reset();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Status: " + textStatus);
        alert("Error: " + errorThrown);
      }
    });
  })
  // Contact Submit - End
  // Thank you overlay
  $("div.darkOverlay div.close").click(function() {
        $("div.darkOverlay").css('display', 'none');
    });
});