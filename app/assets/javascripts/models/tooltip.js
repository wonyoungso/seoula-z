CDNM.models.Tooltip = (function(){
  function Tooltip(params){
    this.view = $('<div/>', {'class': 'tooltip_custom'}).html('');
    this.id = params.id
    this.basic_height_position = $('#energy_0').position().top;
    this.over = false;
  }

  Tooltip.prototype = {
    init: function(){
      this.view = this.view.appendTo($('body'));
      this.view.hide();

      $(document).mousemove(_.bind(function(e){
        if (this.over){
          this.view.show();
          this.view.css({
            'left': e.clientX - this.view.width() / 2,
            'top': e.clientY + this.basic_height_position
          });  
        } else {
          this.view.hide();
        }
        
      }, this));
    },
    set_data: function(data){
      this.view.empty();
      this.view.append($(JST.tooltip_energy(data)));
    }
  }

  return Tooltip;
})();
