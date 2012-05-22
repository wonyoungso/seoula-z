class PrepareBoroughCodeToBoroughTables < ActiveRecord::Migration
  def up
    remove_column :borough_geometries, :borough_key
    add_column :borough_geometries, :borough_code, :integer


    remove_column :boroughs, :borough_key
    add_column :boroughs, :borough_code, :integer
  end

  def down
    remove_column :borough_geometries, :borough_code
    add_column :borough_geometries, :borough_key, :string


    remove_column :boroughs, :borough_code
    add_column :boroughs, :borough_key, :string
  end
end
