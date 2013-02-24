(function($) {
  Drupal.behaviors.os2web_borger_dk = {
    attach: function(context) {
      $("div.mArticle").hide();
      $(".microArticle h2.mArticle").click(function() {
        var myid = $(this).attr('id');
        var style = $('div.' + myid).css('display');
        if (style == 'none') {
          $("div." + myid).show("500");
          $(this).css({
            'background-image' : 'url("../sites/all/modules/os2web_borger_dk/images/foldIn.png")',
          });
        }
        else {
          $("div." + myid).hide("500");
          $(this).css({
            'background-image' : 'url("../sites/all/modules/os2web_borger_dk/images/foldOut.png")',
          });
        }
      });
    }
  }
})(jQuery);
