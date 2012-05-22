class BusinessSeoul < ActiveRecord::Base
  belongs_to :dong
  belongs_to :borough
    
    # t.column "business_quantity", :integer
    # t.column "woman_quantity", :integer
    # t.column "people_quantity", :integer
    # t.column "man_quantity", :integer
    # t.column "created_at", :datetime, :null => false
    # t.column "updated_at", :datetime, :null => false
    # t.column "woman_ceo_quantity", :integer

  def conv_to_json
    {
      :id => self.id,
      :borough_id => self.borough_id,
      :business_quantity => self.business_quantity,
      :woman_quantity => self.woman_quantity,
      :people_quantity => self.people_quantity,
      :man_quantity => self.man_quantity,
      :woman_ceo_quantity => self.woman_ceo_quantity  
    }
  end
end
