class AddWomanCeoQuantityToBusinessSeouls < ActiveRecord::Migration
  def change
    add_column :business_seouls, :woman_ceo_quantity, :integer
  end
end
