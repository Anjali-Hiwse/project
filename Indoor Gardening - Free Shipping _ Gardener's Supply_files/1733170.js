$('form#monetate-email-lightbox').on('submit',function() {
  //$.post($(this).attr('action'), $(this).serialize(), function(response){
  //},'json');
 _ltk.Subscriber.List = 'contentsubscriber';
_ltk.Subscriber.Email = document.querySelector('#ltkmodal-email').value;
_ltk.Subscriber.Submit();

  setTimeout(function() {
  $('img.ltk-headline').attr('src','//sb.monetate.net/img/1/c/static/5018/559301/39c3924b365e8a28adb7daa250c5a80654f596bf.png');
  $("#contentInformation p").html("");
  $('form#monetate-email-lightbox').hide();
    $("#contentInformation p").after("<br><h1>Connect with Us!</h1><a class=\"social\" href=\"https://www.facebook.com/gardeners\" title=\"facebook\" target=\"_blank\"><img src=\"https://mediacdn.espssl.com/7848/Shared/Modal/facebook.png\" alt=\"Facebook\" style=\"display: inline-block; width: 40px; height: auto;\"></a>&nbsp;&nbsp;<a class=\"social\" href=\"https://twitter.com/Gardenerssupply\" title=\"twitter\" target=\"_blank\"><img src=\"https://mediacdn.espssl.com/7848/Shared/Modal/twitter.png\" alt=\"Twitter\" style=\"display: inline-block; width: 40px; height: auto;\"></a><p class=\"small\">Please <a class=\"ltkmodal-close\" onclick=\"$('#monetate-email-lightbox').parents('#monetate_lightbox').fadeOut(300);\">click here</a> to close this window.</p>");
  }, 500);
  var email = $("input#ltkmodal-email").val();
  if(email != ''){
    if(email.indexOf('@') >= 0){      
      email = calcMD5(email);
      var d = new Date();
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = "personId=" + email + ";" + expires + ";path=/";
    }
  }
  return false;
});

/*
border: 2px solid;
border-radius: 5px;
padding: 10px;
cursor: pointer;
*/