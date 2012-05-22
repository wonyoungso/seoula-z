CDNM.models.MenuManager = (function(){
  function MenuManager(params){
    this.view = params.view;
    this.menus = [];
  }

  MenuManager.prototype = {
    init: function(){
      this.view.find('.category').each(_.bind(function(idx, item){
        var menu = new CDNM.models.Menu({view: $(item)});
        menu.init();
        this.menus.push(menu);
      }, this));
    }
  }

  return MenuManager;
})();

CDNM.models.Menu = (function(){
  function Menu(params){
    this.view = params.view;
    _.extend(this, Backbone.Events);
  }

  Menu.prototype = {
    init: function(){
      this.view.mouseenter(_.bind(function(e){
        this.view.find('em').css('display', 'block');
      }, this));

      this.view.mouseleave(_.bind(function(e){
        this.view.find('em').hide();
      }, this));

    }
  }

  return Menu;
})();