class AddBoroughCodeToEnergyconsumes < ActiveRecord::Migration
  def change
    add_column :energyconsumes, :borough_code, :integer
  end
end
