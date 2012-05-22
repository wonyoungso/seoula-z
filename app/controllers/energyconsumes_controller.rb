#encoding: utf-8
class EnergyconsumesController < ApplicationController
  def show
    if params[:mode] == 'borough'
      @borough = Borough.find(params[:id])
      render :json => {:success => true, :borough => @borough.conv_to_json, :energyconsume => @borough.energyconsume.conv_to_json}
    end
  end

  def index
    if params[:mode] == 'borough'
      @es = Energyconsume.where(:dong_code => nil)

      render :json => {:success => true, :boroughs => @es.map {|es| 
        {
          :borough => es.borough.conv_to_json, 
          :energyconsume => es.conv_to_json 
        }
      }}

    elsif params[:mode] == 'dong'
      @es = Energyconsume.where(:borough_code => nil)
      render :json => {:success => true, :dongs => @es.map {|es| 
        {
          :dong => es.dong.conv_to_json, 
          :energyconsume => es.conv_to_json 
        }
      }}
    end
  end
end