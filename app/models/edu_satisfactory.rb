class EduSatisfactory < ActiveRecord::Base
  belongs_to :borough
  def conv_to_json
    {
      :id => self.id,
      :borough_id => self.borough_id,
      :public_satisfactory_01 => self.public_satisfactory_01,
      :public_satisfactory_02 => self.public_satisfactory_02,
      :public_satisfactory_03 => self.public_satisfactory_03,
      :public_satisfactory_04 => self.public_satisfactory_04,
      :public_satisfactory_05 => self.public_satisfactory_05,
      :public_percentage => self.public_percentages,
      :private_satisfactory_01 => self.private_satisfactory_01,
      :private_satisfactory_02 => self.private_satisfactory_02,
      :private_satisfactory_03 => self.private_satisfactory_03,
      :private_satisfactory_04 => self.private_satisfactory_04,
      :private_satisfactory_05 => self.private_satisfactory_05,
      :private_percentage => self.private_percentages
    }
  end
end
