CDNM.views.main_view = (function(){
  var page_renderer;

  function main_view(){
    page_renderer = new CDNM.models.PageRenderer({container: $("#content")});
    page_renderer.init();
  }

  return main_view;
})();
