CDNM.models.PageRenderer = (function(){
  function PageRenderer(params){
    this.container = params.container;
    this.articles = {};
  }

  PageRenderer.prototype = {
    init: function(){
      this.load();
    },

    load: function(){
      $.ajax({
        url: '/articles/latests.json',
        type: 'GET',
        success: _.bind(this.latest_complete, this)
      })
    },

    latest_complete: function(data){
      if (data.success) {

        _.each(data.articles, function(article_data){

          var article = new CDNM.models.Article({container: this.container, data: article_data});
          article.init();
          this.articles[parseInt(article_data.id)] = article;
        }, this);

      } else {
        alert(data.message);
      }
    }

  }

  return PageRenderer;
})();