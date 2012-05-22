class CreateEduSatisfactories < ActiveRecord::Migration
  def change
    create_table :edu_satisfactories do |t|
      t.integer :borough_id
      t.float :public_satisfactory_01
      t.float :public_satisfactory_02
      t.float :public_satisfactory_03
      t.float :public_satisfactory_04
      t.float :public_satisfactory_05
      t.float :private_satisfactory_01
      t.float :private_satisfactory_02
      t.float :private_satisfactory_03
      t.float :private_satisfactory_04
      t.float :private_satisfactory_05
      t.timestamps
    end
  end
end
