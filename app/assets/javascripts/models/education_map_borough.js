CDNM.models.EducationMapBorough = (function(){
  function EducationMapBorough(params){
    this.path = params.path;
    this.id = this.path.data.id;
    this.borough_data = null;
    this.current_color = '#3F294A';
    this.percentage_data = null;
    this.satisfactory_data = null;
    this.current_data = null;
    this.tooltip = null;
  }

  EducationMapBorough.prototype ={
    init: function(){
      this.path.svgPath.attr('stroke', '#555');
      this.path.svgPath.attr('fill', '#3F294A');
      
        this.path.svgPath.mouseover(_.bind(this.path_mouseover_handler, this));
        this.path.svgPath.mouseout(_.bind(this.path_mouseout_handler, this));
    },



    path_mouseover_handler: function(ev){
      this.path.svgPath.animate({fill: '#222222'}, 250);
      this.tooltip.over = true;
      this.tooltip.set_data(this.current_data);
    },

    path_mouseout_handler: function(ev){
      this.path.svgPath.animate({fill: this.current_color}, 250);
      this.tooltip.over = false;

    },

    set_tooltip: function(tooltip){
      try{
        this.tooltip.hide();
      } catch(e) {}
      this.tooltip = tooltip;  

    },

    set_current_color: function(){
      this.current_color = this.path.svgPath.attr('fill');
    },

    set_percentage_data: function(data){
      this.percentage_data = data;
      this.current_data = this.percentage_data;
    },

    set_satisfactory_data: function(data){
      this.satisfactory_data = data;
      this.current_data = this.satisfactory_data;
    }
  }

  return EducationMapBorough;
})();
