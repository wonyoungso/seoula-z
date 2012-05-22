class CreateEduAcademies < ActiveRecord::Migration
  def change
    create_table :edu_academies do |t|
      t.integer :borough_id
      t.integer :school_bosup
      t.integer :school_international
      t.integer :school_art
      t.integer :school_special
      t.integer :school_etc
      t.integer :work_tech
      t.integer :work_international
      t.integer :work_liberal
      t.integer :work_craft
      t.integer :readingroom
      
      t.timestamps
    end
  end
end
