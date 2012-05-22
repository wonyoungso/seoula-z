class Article < ActiveRecord::Base

  def conv_to_json(template)
    {
      :id => self.id,
      :title => self.title,
      :description => self.description,
      :template => template
    }
  end
end
