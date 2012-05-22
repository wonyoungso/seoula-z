class CreatePublicRestrooms < ActiveRecord::Migration
  def change
    create_table :public_restrooms do |t|
      t.integer :borough_id
      t.string :dong_name
      t.string :dong
      t.point :the_geom, :srid => 4326
      t.integer :cols
      t.timestamps
    end
  end
end
