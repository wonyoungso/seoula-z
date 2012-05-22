class AddBoroughIdToBusinessSeouls < ActiveRecord::Migration
  def change
    add_column :business_seouls, :borough_id, :integer
  end
end
