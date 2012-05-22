#encoding:utf-8
class EduPercentagesController < ApplicationController

  def index
    @edus = EduPercentage.all

    render :json => {:success => true, :boroughs => @edus.map {|edu| 
      {
        :borough => edu.borough.conv_to_json, 
        :edu_percentage => edu.conv_to_json 
      }
    }}
  end

end