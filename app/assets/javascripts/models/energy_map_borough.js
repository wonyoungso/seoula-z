CDNM.models.EnergyMapBorough = (function(){
  function EnergyMapBorough(params){
    this.path = params.path;
    this.id = this.path.data.id;
    this.borough_data = null;
    this.current_color = null;
    this.energyconsume_data = null;
    this.tooltip = null;
  }

  EnergyMapBorough.prototype ={
    init: function(){

      this.tooltip= new CDNM.models.Tooltip({'id': 'energy_tooltip_' + this.id, container: $(this.path.svgPath.node)});
      this.tooltip.init();

      this.path.svgPath.attr('stroke', '#555');
      this.path.svgPath.attr('fill', '#222222');
      
      this.get_data();
    //  this.path.svgPath.mouseover(_.bind(this.path_mouseover_handler, this));
    },

    get_data: function(){
      $.ajax({
        type: 'GET',
        url: '/energyconsumes/' + this.id + '.json',
        data: {'mode': 'borough'},
        success: _.bind(this.get_energy_data_handler, this)
      });
    },

    get_energy_data_handler: function(data){
      if (data.success){
        this.borough_data = data.borough;
        this.energyconsume_data = data.energyconsume;
        this.tooltip.set_data(data.energyconsume);
        $(this.path.svgPath.node).mouseenter(_.bind(this.path_mouseover_handler, this));
        $(this.path.svgPath.node).mouseleave(_.bind(this.path_mouseout_handler, this));
      } else {
        alert("데이터 로드 중 오류가 발생하였습니다.");
      }
    },

    path_mouseover_handler: function(ev){
      this.path.svgPath.attr('fill', '#222222');
      this.tooltip.over = true;
    },

    path_mouseout_handler: function(ev){
      this.path.svgPath.attr('fill', this.current_color);
      this.tooltip.over = false;

    },

    set_current_color: function(){
      this.current_color = this.path.svgPath.attr('fill');
    }
  }

  return EnergyMapBorough;
})();
