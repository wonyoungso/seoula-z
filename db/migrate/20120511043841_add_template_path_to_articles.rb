class AddTemplatePathToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :template_path, :string
  end
end
