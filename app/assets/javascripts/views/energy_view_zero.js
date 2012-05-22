CDNM.views.energy_view_zero = (function(){
  var article_id,
      energy_map,
      energy_btn,
      business_btn,
      connection_btn;

  function energy_view_zero(id){
    article_id = id;

    
    energy_btn = $('#energy_btn');
    business_btn = $('#business_btn');
    connection_btn = $('#connection_btn');
    
    energy_map = new CDNM.models.EnergyMap({view:$('#energy_0 .map_area')});
    energy_map.init();

    business_btn.click(function(e){
      e.preventDefault();
      energy_map.business_call();
    });

    energy_btn.click(function(e){
      e.preventDefault();
      energy_map.energy_call();
    });
  }

  return energy_view_zero;
})();
