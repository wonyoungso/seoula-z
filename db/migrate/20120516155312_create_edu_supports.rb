class CreateEduSupports < ActiveRecord::Migration
  def change
    create_table :edu_supports do |t|
      t.integer :borough_id
      t.integer :money
      t.timestamps
    end
  end
end
