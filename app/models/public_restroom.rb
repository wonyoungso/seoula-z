require 'rgeo'
class PublicRestroom < ActiveRecord::Base
  belongs_to :borough
  belongs_to :dong

  set_rgeo_factory_for_column(:location,
    RGeo::Geographic.spherical_factory(:srid => 4326))
end
