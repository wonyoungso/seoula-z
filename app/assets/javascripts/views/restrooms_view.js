CDNM.views.restrooms_view = (function(){
  var restroom_map,
      borough_select_btn,
      restroom_info_modal;

  function restrooms_view(id){
    article_id = id;
    restroom_info_modal = new CDNM.models.RestroomInfoModal();
    restroom_info_modal.init();
  
    wax.tilejson('http://tilestream.tiia.kr:8888/v2/seoul_restrooms.json',
      function(tilejson) {
        tilejson.template = "{{#__location__}}{{/__location__}}{{#__teaser__}}{{/__teaser__}}{{#__full__}}{{{id}}}{{/__full__}}"
      var map = new L.Map('map-div')
        .addLayer(new wax.leaf.connector(tilejson))
        .setView(new L.LatLng(37.5078, 127.0529), 15);

       wax.leaf.interaction()
        .map(map)
        .tilejson(tilejson)
        .on('on', function(o) {
          if (o.e.type == 'mouseup') {
            restroom_info_modal.update_and_show(o.data.id);
          }
        });
      

    });

  }

  return restrooms_view;
})();
