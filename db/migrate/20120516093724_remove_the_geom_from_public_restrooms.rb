class RemoveTheGeomFromPublicRestrooms < ActiveRecord::Migration
  def up
    remove_column :public_restrooms, :the_geom
  end

  def down
    add_column :public_restrooms, :the_geom, :geometry
  end
end
