CDNM.models.RestroomInfoModal = (function(){
  function RestroomInfoModal (){
    this.modal_view = null;
    this.close_btn = null;
    this.modal_back = null;
  }

  RestroomInfoModal.prototype = {
    init: function(){

      this.modal_view = $('<div class="modal modal_restroom"><a href="#" class="close close_btn">x</a><div class="contents"></div></div>');

      this.modal_back = $('<div class="modal_back"></div>');

      this.modal_back = this.modal_back.appendTo($('body'));
      this.modal_view = this.modal_view.appendTo($('body'));
      this.close_btn = this.modal_view.find('.close_btn');
      this.close_btn.click(_.bind(function(e){
        e.preventDefault();
        this.modal_view.hide();
        this.modal_back.hide();
      }, this));
    },

    update_and_show: function(id){
      this.modal_back.show();

      this.modal_view.find('.contents').empty();
      this.modal_view.fadeIn();

      $.ajax({
        type: 'GET',
        url: '/public_restrooms/' + id,
        success: _.bind(this.sync, this)
      })
    },

    sync: function(data){
      this.modal_view.find('.contents').append($(data));
    }
  }
  return RestroomInfoModal;
})();
