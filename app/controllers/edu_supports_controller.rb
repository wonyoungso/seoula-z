#encoding:utf-8
class EduSupportsController < ApplicationController

  def index
    @edus = EduSupport.all

    render :json => {:success => true, :boroughs => @edus.map {|edu| 
      {
        :borough => edu.borough.conv_to_json, 
        :edu_support => edu.conv_to_json 
      }
    }}
  end

end