class CreateEduPercentages < ActiveRecord::Migration
  def change
    create_table :edu_percentages do |t|
      t.integer :borough_id
      t.float :percentage
      t.float :range_01
      t.float :range_02
      t.float :range_03
      t.float :range_04
      t.timestamps
    end
  end
end
