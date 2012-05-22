class AddDongIdToDongGeometries < ActiveRecord::Migration
  def change
    add_column :dong_geometries, :dong_id, :integer
  end
end
