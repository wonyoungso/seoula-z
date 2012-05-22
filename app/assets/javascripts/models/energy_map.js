Number.prototype.number_with_delimiter = function(delimiter) {
    var number = this + '', delimiter = delimiter || ',';
    var split = number.split('.');
    split[0] = split[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + delimiter
    );
    return split.join('.');
};

CDNM.models.EnergyMap = (function(){
  function EnergyMap(params){
    this.map = null;
    this.map_view = params.view;
    this.boroughs = [];
    this.borough_data = [];
    this.borough_business_data = [];
    this.scaler = null;
    this.business_map_data = null;
  }

  EnergyMap.prototype = {
    init: function(){
      this.map = new kartograph.Kartograph(this.map_view, 900, 800);
      this.map.loadMap('/borough.svg', _.bind(function(map) {
        
        this.map.addLayer({id: "borough", key: "id"});

        this.set_data();
      }, this));
    },

    set_data: function(){
      $.ajax({
        type:'GET',
        url: '/energyconsumes.json?mode=borough',
        success: _.bind(this.get_data_success_handler, this) 
      }) 
    },

    energy_call: function(){
       this.set_scale();
    },

    business_call: function(){
      if (_.isNull(this.business_map_data)){
        $.ajax({
          type: 'GET',
          url: '/business_seouls.json',
          data: {'mode': 'borough'},
          success: _.bind(this.business_seouls_complete_handler, this)
        });
      } else {
        this.set_business_scale();
      }
    },

    business_seouls_complete_handler: function(data){
      if (data.success){
        this.borough_business_data = data.boroughs;

        _.each(this.boroughs, function(borough){
          borough.set_current_color();
        }, this);

        this.set_business_scale();
      } else {
        alert("데이터 로드 중 오류가 발생하였습니다.")
      }
    },

    set_business_scale: function(){
       this.business_map_data = _.map(this.borough_business_data, function(borough) { 
        return {
          id: borough.borough.id, 
          business_quantity: borough.business_seoul.business_quantity
        };
      });

      var scaler = new chroma.ColorScale({
        colors: chroma.brewer.GnBu,
        limits: chroma.limits(this.business_map_data, 'q', 7, 'business_quantity') 
      });

      this.map.choropleth({
        data: this.business_map_data,
        key: 'id',
        colors: function(d) {
          if (d == null) {
            return '#fff';
          }

          return scaler.getColor(d['business_quantity']);
        },
        duration: 0
      }); 

      _.each(this.boroughs, function(borough){
        borough.set_current_color();
      }, this);

    },

    get_data_success_handler: function(data){
      if (data.success){
        this.borough_data = data.boroughs;

        _.each(this.map.layers.borough.paths, function(path){
          var borough = new CDNM.models.EnergyMapBorough({path: path});
          borough.init(borough.path.data.id);
          this.boroughs.push(borough);
        }, this);

        this.set_scale();
      } else {
        alert("데이터 수신 중 오류가 발생하였습니다.");
      }
    },

    set_scale: function(){
      this.scale_2008_data = _.map(this.borough_data, function(borough) { 
        return {
          id: borough.borough.id, 
          energy_2007: borough.energyconsume.energy_2007, 
          energy_2008: borough.energyconsume.energy_2008
        };
      });

      var scaler = new chroma.ColorScale({
        colors: chroma.brewer.Reds,
        limits: chroma.limits(this.scale_2008_data, 'q', 7, 'energy_2008') 
      });

      this.map.choropleth({
        data: this.scale_2008_data,
        key: 'id',
        colors: function(d) {
          if (d == null) {
            return '#fff';
          }

          return scaler.getColor(d['energy_2008']);
        },
        duration: 0
      }); 

      _.each(this.boroughs, function(borough){
        borough.set_current_color();
      }, this);



    }
  }

  return EnergyMap;
})();



