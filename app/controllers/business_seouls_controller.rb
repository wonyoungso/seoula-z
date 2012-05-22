#encoding: utf-8
class BusinessSeoulsController < ApplicationController
  def index
    if params[:mode] == 'borough'
      @bs = BusinessSeoul.where(:dong_id => nil)

      render :json => {:success => true, :boroughs => @bs.map {|bs| 
        {
          :borough => bs.borough.conv_to_json, 
          :business_seoul => bs.conv_to_json 
        }
      }}

    elsif params[:mode] == 'dong'
      @bs = BusinessSeoul.where(:borough_id => nil)
      render :json => {:success => true, :dongs => @bs.map {|bs| 
        {
          :dong => bs.dong.conv_to_json, 
          :business_seoul => bs.conv_to_json 
        }
      }}
    end
  end

end