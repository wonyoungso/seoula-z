class AddTheGeomToBoroughs < ActiveRecord::Migration
  def change
    add_column :boroughs, :the_geom, :geometry
  end
end
