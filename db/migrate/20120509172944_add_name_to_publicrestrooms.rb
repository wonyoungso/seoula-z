class AddNameToPublicrestrooms < ActiveRecord::Migration
  def change
    add_column :public_restrooms, :name, :string
  end
end
