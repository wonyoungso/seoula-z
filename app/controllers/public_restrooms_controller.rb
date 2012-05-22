class PublicRestroomsController < ApplicationController 
  def show
    @restroom = PublicRestroom.find(params[:id])
    render :layout => false
  end
end