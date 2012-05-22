#encoding:utf-8
class EduSatisfactoriesController < ApplicationController

  def index
    @edus = EduSatisfactory.all

    render :json => {:success => true, :boroughs => @edus.map {|edu| 
      {
        :borough => edu.borough.conv_to_json, 
        :edu_satisfactory => edu.conv_to_json 
      }
    }}
  end

end