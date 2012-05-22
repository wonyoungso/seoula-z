class PrepareDongCodeToDongs < ActiveRecord::Migration
  def up
    add_column :dong_geometries, :dong_code, :integer
    add_column :dongs, :dong_code, :integer
  end

  def down
    remove_column :dong_geometries, :dong_code
    remove_column :dongs, :dong_code
  end
end
