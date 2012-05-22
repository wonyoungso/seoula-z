class RemoveAllOldDongKeyToDongs < ActiveRecord::Migration
  def up
    remove_column :dongs, :dong_key
    remove_column :dong_geometries, :dong_key
    remove_column :dong_geometries, :dongcode
  end

  def down
  end
end
