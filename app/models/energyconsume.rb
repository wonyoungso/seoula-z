class Energyconsume < ActiveRecord::Base
  validates :dong_name, :uniqueness => true
  belongs_to :dong, :primary_key => 'dong_code', :foreign_key => 'dong_code'
  belongs_to :borough, :primary_key => 'borough_code', :foreign_key => 'borough_code'
  
  def conv_to_json
    {
      :id => self.id,
      :dong_code => self.dong_code,
      :borough_code => self.borough_code,
      :energy_2007 => self.energy_2007,
      :energy_2008 => self.energy_2008
    }
  end
end
