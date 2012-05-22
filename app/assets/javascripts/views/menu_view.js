CDNM.views.menu_view = (function(){
  var menu_manager,
      latest_scroller,
      toggle_collapse;

  function menu_view(){
    menu_manager = new CDNM.models.MenuManager({view: $(".category_list")});
    menu_manager.init();
    
    latest_scroller = new CDNM.models.LatestScroller();
    toggle_collapse = new CDNM.models.ToggleCollapse({view: $('#toggle_header_btn'), header: $('#header_wrapper')});
    toggle_collapse.init();
  }


  return menu_view;
})();