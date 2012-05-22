CDNM.models.EducationMap = (function(){
  function EducationMap(params){
    this.map = null;
    this.map_view = params.view;
    this.boroughs = {};
    this.edu_percentages_data = null;
    this.edu_satisfactories_data = null;
    this.tooltip = new CDNM.models.EducationTooltip({container: this.map_view});
    this.satis_tooltip = new CDNM.models.EducationSatisfactoryTooltip({container: this.map_view});
    this.tooltip.init();
    this.satis_tooltip.init();
  }

  EducationMap.prototype = {
    init: function(){
      this.map = new kartograph.Kartograph(this.map_view, 900, 800);
      this.map.loadMap('/borough.svg', _.bind(function(map) {
        
        this.map.addLayer({id: "borough", key: "id"});
        this.percentage_call();
      }, this));
    },
    satisfactory_call: function(){
      $.ajax({
        type:'GET',
        url: '/edu_satisfactories.json',
        success: _.bind(this.satisfactory_sync, this) 
      });
    },

    satisfactory_sync: function(data){
      if (data.success){

        this.edu_satisfactory_data = data.boroughs;

        if (this.boroughs.length == 0){ 
          _.each(this.map.layers.borough.paths, function(path){
            var borough = new CDNM.models.EducationMapBorough({path: path});
            borough.init(borough.path.data.id);

            this.boroughs[borough.path.data.id] = borough;
          }, this);

        }

        _.each(this.boroughs, function(borough){
          borough.set_tooltip(this.satis_tooltip);
        }, this);
        
        this.satisfactory_scale();

        
      } else {
        alert("데이터 로드 중 오류가 발생하였습니다.")
      }
    },

    satisfactory_scale: function(){
      var edu_data = _.map(this.edu_satisfactory_data, _.bind(function(borough) { 
        var data = {
          id: borough.borough.id, 
          name: borough.borough.name,
          public_satisfactory_01: borough.edu_satisfactory.public_satisfactory_01,
          public_satisfactory_02: borough.edu_satisfactory.public_satisfactory_02,
          public_satisfactory_03: borough.edu_satisfactory.public_satisfactory_03,
          public_satisfactory_04: borough.edu_satisfactory.public_satisfactory_04,
          public_satisfactory_05: borough.edu_satisfactory.public_satisfactory_05,
          public_percentage: borough.edu_satisfactory.public_percentage,

          private_satisfactory_01: borough.edu_satisfactory.private_satisfactory_01,
          private_satisfactory_02: borough.edu_satisfactory.private_satisfactory_02,
          private_satisfactory_03: borough.edu_satisfactory.private_satisfactory_03,
          private_satisfactory_04: borough.edu_satisfactory.private_satisfactory_04,
          private_satisfactory_05: borough.edu_satisfactory.private_satisfactory_05,
          private_percentage: borough.edu_satisfactory.private_percentage
        };

        try{
          this.boroughs[borough.borough.id].set_satisfactory_data(data);
        }
        catch(e){
          alert(borough.borough.name);
        }
        return data;
      }, this));


      var scaler = new chroma.ColorScale({
        colors: chroma.brewer.Reds,
        limits: chroma.limits(edu_data, 'q', 5, 'private_percentage') 
      });

      this.map.choropleth({
        data: edu_data,
        key: 'id',
        colors: function(d) {
          if (d == null) {
            return '#fff';
          }
          return scaler.getColor(d['private_percentage']);
        },
        duration: 0
      }); 

      _.each(this.boroughs, function(borough){
        borough.set_current_color();
      }, this);


    },


    percentage_call: function(){
      $.ajax({
        type:'GET',
        url: '/edu_percentages.json',
        success: _.bind(this.percentage_sync, this) 
      });
    },

    percentage_sync: function(data){
      if (data.success){

        this.edu_percentages_data = data.boroughs;

        _.each(this.map.layers.borough.paths, function(path){
          var borough = new CDNM.models.EducationMapBorough({path: path, tooltip: this.tooltip});
          borough.init(borough.path.data.id);

          borough.set_tooltip(this.tooltip);
          this.boroughs[borough.path.data.id] = borough;
        }, this);

        _.each(this.boroughs, function(borough){
          borough.set_tooltip(this.tooltip);
        }, this);

        this.percentage_scale();

        
      } else {
        alert("데이터 로드 중 오류가 발생하였습니다.")
      }
    },

    percentage_scale: function(){
      var edu_data = _.map(this.edu_percentages_data, function(borough) { 
        var data = {
          id: borough.borough.id, 
          name: borough.borough.name,
          percentage: borough.edu_percentage.percentage,
          range_01: borough.edu_percentage.range_01,
          range_02: borough.edu_percentage.range_02,
          range_03: borough.edu_percentage.range_03,
          range_04: borough.edu_percentage.range_04
        };

        try{
          this.boroughs[borough.borough.id].set_percentage_data(data);
        }
        catch(e){
          alert(borough.borough.name);
        }
        return data;
      }, this);


      var scale = $K.scale.linear(edu_data, 'percentage');



      var scaler = new chroma.ColorScale({
        colors: chroma.brewer.Purples,
        limits: chroma.limits(edu_data, 'q', 5, 'percentage') 
      });

      this.map.choropleth({
        data: edu_data,
        key: 'id',
        colors: function(d) {
          if (d == null) {
            return '#fff';
          }
          return scaler.getColor(d['percentage']);
        },
        duration: 0
      }); 

      _.each(this.boroughs, function(borough){
        borough.set_current_color();
      }, this);


      // if (this.symbols) this.symbols.remove();

      // this.symbols = this.map.addSymbols({
      //   data: edu_data,
      //   type: $K['PieChart'],
      //   colors: ['#1f68b4', '#aaceff', '#FF0000', '#FF0000'],
      //   border: '#fff',
      //   values: function(d) { 
      //     return [d.range_01, d.range_02, d.range_03, d.range_04] 
      //   },
      //   location: function(d) { 
      //     return 'borough.' + d.id; 
      //   },
      //   radius: function(d) { 
      //     return Math.max(3, Math.sqrt(scale(d.percentage))*40) 
      //   }
      // });

    


    }
  }

  return EducationMap;
})();
