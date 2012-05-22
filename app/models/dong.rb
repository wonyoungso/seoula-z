class Dong < ActiveRecord::Base
  belongs_to :borough, :primary_key => 'borough_code', :foreign_key => 'borough_code'
  has_one :business_seoul
  has_one :dong_geometry, :primary_key => 'dong_code', :foreign_key => 'dong_code'
  has_one :energyconsume, :primary_key => 'dong_code', :foreign_key => 'dong_code'

  def conv_to_json
    {
      :id => self.id,
      :dong_code => self.dong_code,
      :borough_code => self.borough_code,
      :name => self.name
    }
  end
end