CDNM.views.educations_view_zero = (function(){
  var article_id,
      education_map,
      satisfactory_btn,
      percentage_btn,
      academy_graphic;

  function educations_view_zero(){

    education_map = new CDNM.models.EducationMap({view:$('#education_0 .map_area')});
    education_map.init();

    academy_graphic = new CDNM.models.AcademyGrahpic({view: $('.academy_info')});
    academy_graphic.init();
    
    satisfactory_btn = $('#satisfactory_btn');
    satisfactory_btn.click(function(e){
      e.preventDefault();
      $($(".legend").find('img')[0]).attr('src', '/assets/education_satis_legend.png');
      education_map.satisfactory_call();
    });

    percentage_btn = $('#percentage_btn');
    percentage_btn.click(function(e){
      e.preventDefault();
      $($(".legend").find('img')[0]).attr('src', '/assets/education_zero_legend.png');
      education_map.percentage_call();
    });
  }

  return educations_view_zero;
})();