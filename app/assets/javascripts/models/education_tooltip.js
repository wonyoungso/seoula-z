CDNM.models.EducationTooltip = (function(){
  function EducationTooltip (params){
    this.view = $('<div/>', {'class': 'tooltip_education', 'id': 'tooltip_education_zero'});
    this.id = params.id;
    this.basic_height_position = params.container.position().top - this.view.height() - 200;
    this.over = false;

  }

  EducationTooltip.prototype = {
    init: function(){
      this.view = this.view.appendTo($('body'));
      this.paper = Raphael(this.view[0], 190, 150, 20, 20);      
      this.graph = this.paper.barchart(10, 10, 126, 80, [1, 1, 1, 0.1], {colors: ["#520398", "#520398", "#520398", "#520398"]});
       this.paper.text(110, 10, "세부 지출 비율").attr({'font-size': 12, 'font-family': 'NanumGothicWeb'});
      this.borough_text = this.paper.text(28, 10, "구");
      this.range_01_text = this.paper.text(30, 100,  "~19%");
      this.range_02_text = this.paper.text(60, 100, "~39%");
      this.range_03_text = this.paper.text(90, 100, "~49%");
      this.range_04_text = this.paper.text(120, 100, "60%~");
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
      var moved_graph = this.paper.barchart(10, 10, 126, 96, [[data.range_01, data.range_02, data.range_03, data.range_04]], {colors: ["#520398", "#520398", "#520398", "#520398"]});

      _.each(this.graph[0], function(v, k) {
        if (!(k == 3 && data.range_04 < 1.2)){

          v.animate({ path: moved_graph.bars[0][k].attr("path") }, 200);
         //v.value[0] = moved_graph[k][0];

        }
        
      }, this);
      this.borough_text.attr('fill', '#000000');
      this.borough_text.attr('text', data.name).attr({'font-size': 12, 'font-family': 'NanumGothicWeb' });
      moved_graph.remove();
    }
  }

  return EducationTooltip ;
})();
