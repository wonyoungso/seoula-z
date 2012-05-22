class CreateBusinessSeouls < ActiveRecord::Migration
  def change
    create_table :business_seouls do |t|
      t.integer :dong_id
      t.integer :business_quantity
      t.integer :woman_quantity
      t.integer :people_quantity
      t.integer :man_quantity
      t.integer :woman_quantity
      t.timestamps
    end
  end
end
