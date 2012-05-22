class EduPercentage < ActiveRecord::Base
  belongs_to :borough
  def conv_to_json
    {
      :id => self.id,
      :borough_id => self.borough_id,
      :percentage => self.percentage,
      :range_01 => self.range_01,
      :range_02 => self.range_02,
      :range_03 => self.range_03,
      :range_04 => self.range_04
    }
  end
end
