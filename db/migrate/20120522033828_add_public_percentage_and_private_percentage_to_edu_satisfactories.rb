class AddPublicPercentageAndPrivatePercentageToEduSatisfactories < ActiveRecord::Migration
  def change
    add_column :edu_satisfactories, :public_percentages, :float
    add_column :edu_satisfactories, :private_percentages, :float 
  end
end
