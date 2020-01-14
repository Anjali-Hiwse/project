$(window).load(function() {
  $('.mt_zero_reviews').hide();
  $('.mt_zero_reviews').prev().hide();
  $('.mt_itemWrapper a').each(function() {
    var trimmedUrl = $(this).attr('href').replace(/^.*\/\/[^\/]+/, '');
    $(this).attr('href', trimmedUrl);
  });
  $('.mt_rating.full').html('<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>');
  $('.mt_rating.empty').html('<i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i>');
});

var checkExist = setInterval(function(){
  if ( $("#monetate_endcap_3aea7b75").length ) {
    var mtImage1 = $('#monetate_endcap_3aea7b75').find('.mt_itemImageContainer img:eq(0)').attr('src');
    var mtImageTrimmed1 = mtImage1.split(/[?#]/)[0];
    var mtImageFormatted1 = mtImageTrimmed1 + '?sw=182&sh=237';
    var mtImage2 = $('#monetate_endcap_3aea7b75').find('.mt_itemImageContainer img:eq(1)').attr('src');
    var mtImageTrimmed2 = mtImage2.split(/[?#]/)[0];
    var mtImageFormatted2 = mtImageTrimmed2 + '?sw=182&sh=237';
    $('.mt_itemImageContainer img:eq(0)').attr('src', mtImageFormatted1);
    $('.mt_itemImageContainer img:eq(1)').attr('src', mtImageFormatted2);
    clearInterval(checkExist);
  }
},300);