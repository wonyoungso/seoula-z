class AddLocationToPublicRestrooms < ActiveRecord::Migration
  def change
    add_column :public_restrooms, :location, :point, :srid => 4326
  end
end
