class CreateBoroughs < ActiveRecord::Migration
  def change
    create_table :boroughs do |t|
      t.string :name
      t.integer :borough_key

      t.timestamps
    end
  end
end
