CDNM.models.AcademyGrahpic = (function(){
  function AcademyGraphic(params){
    this.view = params.view;
    this.paper = null;
    this.texts = [];
    this.data = null;
  }

  AcademyGraphic.prototype = {
    init: function(){
      $.ajax({
        type: 'GET',
        url: '/edu_academies/all_index.json',
        success: _.bind(this.academy_all_complete, this)
      });
    },

    academy_all_complete: function(data){
      if (data.success){
        this.data = data;
        this.set_info();
      }
    },


    set_info: function(){
      this.paper = Raphael(this.view[0], 840, 250);
      this.title = this.paper.text(20, 23, "서울 전체\n사교육장 개수");
      this.title.attr({fill: '#FFFFFF', 'font-size': 14, 'font-family': 'NanumGothicWeb', 'text-anchor':'start', 'line-height': '160%'});
      
      this.title_num = this.paper.text(140, 30, CDNM.utils.number_with_delimiter(this.data.edu_sum));
      this.title_num.attr({fill: '#FFFFFF', 'font-size': 50, 'font-family': 'Anton', 'text-anchor': 'start'});

      this.horizontal_line = this.paper.path("M120 230 L880 230");
      this.horizontal_line.attr("stroke", "#D7D7D7");
      this.horizontal_line.attr("stroke-width", "1");
      this.horizontal_line.attr("opacity", 0.5);


      this.vertical_line = this.paper.path("M120 230 L120 60");
      this.vertical_line.attr("stroke", "#D7D7D7");
      this.vertical_line.attr("stroke-width", "1");
      this.vertical_line.attr("opacity", 0.5);

      this.graph = this.paper.barchart(130, 70, 700, 180, _.values(this.data.edu_seoul), {colors: ["#520398", "#520398", "#520398", "#520398", "#520398", "#520398", "#520398", "#520398", "#520398", "#520398"]}).hover(this.fin, this.fout);


      this.texts.push(this.paper.text(150, 240, "보습학원"));
      this.texts.push(this.paper.text(150, 240, "국제화"));
      this.texts.push(this.paper.text(150, 240, "예능"));
      this.texts.push(this.paper.text(150, 240, "특수교육"));
      this.texts.push(this.paper.text(150, 240, "기타"));
      this.texts.push(this.paper.text(150, 240, "직업 기술"));
      this.texts.push(this.paper.text(150, 240, "직업 국제화"));
      this.texts.push(this.paper.text(150, 240, "직업 인문"));
      this.texts.push(this.paper.text(150, 240, "직업 공예"));
      this.texts.push(this.paper.text(150, 240, "독서실"));

      _.each(this.texts, function(text, i){
        text.attr({'x': 170 + (i * 68)});
        text.attr({fill: '#FFFFFF', 'font-size': 12, 'font-family': 'NanumGothicWeb'})
      }, this);

      this.max_text = this.paper.text(100, 80, CDNM.utils.number_with_delimiter(_.max(_.values(this.data.edu_seoul))));
      this.min_text = this.paper.text(100, 220, "0");
      this.max_text.attr({fill: '#FFFFFF', 'font-size': 12, 'font-family': 'NanumGothicWeb'});
      this.min_text.attr({fill: '#FFFFFF', 'font-size': 12, 'font-family': 'NanumGothicWeb'});



    },

    fin: function(){
      //if (_.isNull(this.flag)){
        this.flag = this.paper.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
      //} else {
      //  this.flag.animate({ opacity: 1}, 300);
      //}
    },
    
    fout: function(){
      $(this.flag).remove();
      // this.flag.animate({
      //   opacity: 0
      // }, 300, _.bind(function(){
      //   this.flag.remove();
      // }, this));
    }

  }

  return AcademyGraphic;
})();