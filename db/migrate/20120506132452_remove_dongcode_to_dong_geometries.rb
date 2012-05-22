class RemoveDongcodeToDongGeometries < ActiveRecord::Migration
  def up
    remove_column :dong_geometries, :dongcode
    add_column :dong_geometries, :dongcode, :integer
  end

  def down
    remove_column :dong_geometries, :dongcode
    add_column :dong_geometries, :dongcode, :string
  end
end
