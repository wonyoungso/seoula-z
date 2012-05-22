class Borough < ActiveRecord::Base
  has_many :dongs, :primary_key => 'borough_code', :foreign_key => 'borough_code'
  has_one :borough_geometry, :primary_key => 'borough_code', :foreign_key => 'borough_code'
  has_one :energyconsume, :primary_key => 'borough_code', :foreign_key => 'borough_code'
  has_one :business_seoul
  has_one :edu_academy

  def conv_to_json
    {
      :id => self.id,
      :name => self.name,
      :borough_code => self.borough_code
    }
  end


end