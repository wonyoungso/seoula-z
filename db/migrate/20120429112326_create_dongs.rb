class CreateDongs < ActiveRecord::Migration
  def change
    create_table :dongs do |t|
      t.string :name
      t.integer :dong_key
      t.integer :borough_id

      t.timestamps
    end
  end
end
