class AddDongIdToPublicRestrooms < ActiveRecord::Migration
  def change
    remove_column :public_restrooms, :dong
    add_column :public_restrooms, :dong_id, :integer
  end
end
