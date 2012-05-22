class EduSupport < ActiveRecord::Base
  belongs_to :borough
  def conv_to_json 
    {
      :id => self.id,
      :borough_id => self.borough_id,
      :money => self.money
    }
  end
end
