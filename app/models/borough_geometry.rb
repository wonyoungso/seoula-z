class BoroughGeometry < ActiveRecord::Base
  belongs_to :borough, :primary_key => 'borough_code', :foreign_key => 'borough_code'
end
