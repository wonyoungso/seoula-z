# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120522033828) do

  create_table "articles", :force => true do |t|
    t.string   "title"
    t.text     "template"
    t.integer  "category_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.text     "description"
    t.string   "template_path"
  end

  create_table "borough_geometries", :force => true do |t|
    t.string  "cityname",     :limit => 30
    t.string  "borough_name", :limit => 20
    t.spatial "the_geom",     :limit => {:srid=>4326, :type=>"multi_polygon"}
    t.integer "borough_code"
  end

  add_index "borough_geometries", ["the_geom"], :name => "linecities_the_geom_gist", :spatial => true

  create_table "boroughs", :force => true do |t|
    t.string   "name"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "borough_code"
  end

  create_table "business_seouls", :force => true do |t|
    t.integer  "dong_id"
    t.integer  "business_quantity"
    t.integer  "woman_quantity"
    t.integer  "people_quantity"
    t.integer  "man_quantity"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.integer  "woman_ceo_quantity"
    t.integer  "borough_id"
  end

  create_table "city", :force => true do |t|
    t.string  "cityname", :limit => 30
    t.spatial "the_geom", :limit => {:srid=>4269, :type=>"multi_polygon"}
  end

  add_index "city", ["the_geom"], :name => "korea_coastline_the_geom_gist", :spatial => true

  create_table "dong_geometries", :force => true do |t|
    t.string  "citycode",    :limit => 2
    t.string  "cityname",    :limit => 30
    t.string  "boroughcode", :limit => 4
    t.string  "boroughname", :limit => 20
    t.string  "dongname",    :limit => 30
    t.spatial "the_geom",    :limit => {:srid=>4326, :type=>"geometry"}
    t.integer "dong_code"
  end

  create_table "dongs", :force => true do |t|
    t.string   "name"
    t.integer  "borough_code"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "dong_code"
  end

  create_table "edu_academies", :force => true do |t|
    t.integer  "borough_id"
    t.integer  "school_bosup"
    t.integer  "school_international"
    t.integer  "school_art"
    t.integer  "school_special"
    t.integer  "school_etc"
    t.integer  "work_tech"
    t.integer  "work_international"
    t.integer  "work_liberal"
    t.integer  "work_craft"
    t.integer  "readingroom"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
  end

  create_table "edu_percentages", :force => true do |t|
    t.integer  "borough_id"
    t.float    "percentage"
    t.float    "range_01"
    t.float    "range_02"
    t.float    "range_03"
    t.float    "range_04"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "edu_satisfactories", :force => true do |t|
    t.integer  "borough_id"
    t.float    "public_satisfactory_01"
    t.float    "public_satisfactory_02"
    t.float    "public_satisfactory_03"
    t.float    "public_satisfactory_04"
    t.float    "public_satisfactory_05"
    t.float    "private_satisfactory_01"
    t.float    "private_satisfactory_02"
    t.float    "private_satisfactory_03"
    t.float    "private_satisfactory_04"
    t.float    "private_satisfactory_05"
    t.datetime "created_at",              :null => false
    t.datetime "updated_at",              :null => false
    t.float    "public_percentages"
    t.float    "private_percentages"
  end

  create_table "edu_supports", :force => true do |t|
    t.integer  "borough_id"
    t.integer  "money"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "energyconsumes", :force => true do |t|
    t.integer  "dong_code"
    t.string   "dong_name"
    t.float    "energy_2007"
    t.float    "energy_2008"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "borough_code"
  end

  create_table "public_restrooms", :force => true do |t|
    t.integer  "borough_id"
    t.string   "dong_name"
    t.integer  "cols"
    t.datetime "created_at",                                          :null => false
    t.datetime "updated_at",                                          :null => false
    t.string   "name"
    t.integer  "dong_id"
    t.spatial  "location",   :limit => {:srid=>4326, :type=>"point"}
  end

end
