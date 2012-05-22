CDNM.models.Article = (function(){
  function Article(params){
    this.id = params.data.id;
    this.title = params.data.title;
    this.description = params.data.description;
    this.template = $(params.data.template);
    this.container = params.container;
  }

  Article.prototype = {
    init: function(){
      this.template = this.template.appendTo(this.container);
    }
  }

  return Article;
})();