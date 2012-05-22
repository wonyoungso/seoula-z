CDNM.models.ToggleCollapse = (function(){
  function ToggleCollapse(params){
    this.view = params.view;
    this.header = params.header;
    this.collapsed = false;

    _.extend(this, Backbone.Events);
  }

  ToggleCollapse.prototype = {
    init: function(){
      this.view.click(_.bind(this.click_handler, this));

      this.collapsed = false;
      this.header.css({'top': '-180px'});
      
      _.delay(_.bind(function(){
        this.header.animate({
          top: 0
        }, 400);
      }, this), 1200);

      
      this.view.removeClass('collapsed');

    },

    click_handler: function(e){
      e.preventDefault();
      var top = 0;

      if (!this.collapsed) {
        top = -180;
        this.view.addClass('collapsed');
      } else {
        top = 0;
        this.view.removeClass('collapsed');
      }

      this.header.animate({
        top: top
      }, 400);
      
      this.collapsed = !this.collapsed;
    }
  }

  return ToggleCollapse;
})();