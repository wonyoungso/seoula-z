#encoding:utf-8
class EduAcademiesController < ApplicationController

  def all_index
    @edus = EduAcademy.all
    @edus_map = @edus.map{|edu| {
      :school_bosup => edu.school_bosup,
      :school_international => edu.school_international,
      :school_art => edu.school_art,
      :school_special => edu.school_special,
      :school_etc => edu.school_etc,
      :work_tech => edu.work_tech,
      :work_international => edu.work_international,
      :work_liberal => edu.work_liberal,
      :work_craft => edu.work_craft,
      :readingroom => edu.readingroom
    }}


    @edu_seoul = {}
    @edus_map[0].keys.each do |key|
      if !@edu_seoul[key].present?
        @edu_seoul[key] = 0
      end

      @edu_seoul[key] += @edus_map.inject(0) { |sum, hash| sum + hash[key] }
    end

    render :json => {:success => true, :edu_sum => @edu_seoul.values.inject(:+), :edu_seoul => @edu_seoul }
  end

  def index
    @edus = EduAcademy.all

    render :json => {:success => true, :boroughs => @edus.map {|edu| 
      {
        :borough => edu.borough.conv_to_json, 
        :edu_academy => edu.conv_to_json 
      }
    }}
  end

end