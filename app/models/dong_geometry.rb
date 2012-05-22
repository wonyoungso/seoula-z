class DongGeometry < ActiveRecord::Base
  belongs_to :dong, :primary_key => 'dong_code', :foreign_key => 'dong_code'
end
