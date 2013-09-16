(function() {
  $(function() {});

  $("#carrusel").carousel({
    interval: 3000
  });

  $('#carrusel div').each(function(navmenu, i) {
    if ($(this).attr('id' === 'item_0')) {
      return $('#item_0').addClass('active');
    }
  });

}).call(this);
