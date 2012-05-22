CDNM.models.EducationSatisfactoryTooltip = (function(){
  function EducationSatisfactoryTooltip (params){
    this.view = $('<div/>', {'class': 'tooltip_education_satisfactory', 'id': 'tooltip_education_satis'});
    this.id = params.id;
    this.basic_height_position = params.container.position().top - this.view.height() - 200;
    this.over = false;

  }

  EducationSatisfactoryTooltip.prototype = {
    init: function(){
      this.view = this.view.appendTo($('body'));
      this.paper = Raphael(this.view[0], 190, 150, 20, 20);      
      this.graph = this.paper.barchart(10, 10, 180, 96, [1, 1, 1, 1, 0.1], {colors: ["#CB181D", "#CB181D", "#CB181D", "#CB181D"]});
      this.paper.text(130, 10, "사교육 만족도").attr({'font-size': 12, 'font-family': 'NanumGothicWeb', 'text-anchor': 'start'});
      this.borough_text = this.paper.text(28, 10, "구");
      this.range_01_text = this.paper.text(30, 110,  "매우\n불만족");
      this.range_02_text = this.paper.text(65, 110, "불만족");
      this.range_03_text = this.paper.text(100, 110, "보통");
      this.range_04_text = this.paper.text(135, 110, "만족");
      this.range_04_text = this.paper.text(170, 110, "매우\n만족");
      this.view.hide();
      
      $(document).mousemove(_.bind(function(e){
        if (this.over){
          this.view.show();
          this.view.css({
            'left': e.clientX - this.view.width() / 2,
            'top': e.clientY - this.view.height() - 80
          });  
        } else {
          this.view.hide();
        }
        
      }, this));
    },
    set_data: function(data){
      // //this.view.empty();
      var moved_graph = this.paper.barchart(10, 10, 180, 96, [[data.private_satisfactory_01, data.private_satisfactory_02, data.private_satisfactory_03, data.private_satisfactory_04, data.private_satisfactory_05]], {colors: ["#CB181D", "#CB181D", "#CB181D", "#CB181D"]});

      _.each(this.graph[0], function(v, k) {
        //if (!(k == 3 && data.range_04 < 1.2)){

          v.animate({ path: moved_graph.bars[0][k].attr("path") }, 200);
         //v.value[0] = moved_graph[k][0];

        //}
        
      }, this);
      this.borough_text.attr('fill', '#000000');
      this.borough_text.attr('text', data.name).attr({'font-size': 12, 'font-family': 'NanumGothicWeb' });
      moved_graph.remove();
    }
  }

  return EducationSatisfactoryTooltip;
})();
