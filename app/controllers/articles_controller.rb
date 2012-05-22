#encoding: utf-8
class ArticlesController < ApplicationController
  include ActionView::Helpers::TextHelper
  include ActionView::Helpers::UrlHelper
  include Sprockets::Helpers::RailsHelper
  include Sprockets::Helpers::IsolatedHelper
  include ActionView::Helpers::AssetTagHelper

  def latests
    @articles = Article.order('updated_at DESC').limit(3)
    if @articles.present?

      @articles_json = get_articles_json(@articles)

      
      render :json => {:success => true, :articles => @articles_json }
    else
      render :json => {:success => false, :message => '글이 없습니다.' }
    end
  end

  def show
    @article = Article.find(params[:id]) 

    if @article.present?
      erb_renderer = ERB.new(@article.template)
      @rendered_page_template = erb_renderer.result(binding)

      render :json => {:success => true, :article => @article.conv_to_json(@rendered_page_template)}
    else
      render :json => {:success => false, :message => '글이 없습니다.' }
    end
  end

  private

  def get_articles_json(articles)

    articles_json = []

    articles.each do |article|
      @article = article
      if article.template_path.present?
        erb_renderer = ERB.new(File.read(Rails.root.to_s + article.template_path))
        @rendered_page_template = erb_renderer.result(binding)
      else 
        erb_renderer = ERB.new(@article.template)
        @rendered_page_template = erb_renderer.result(binding)
      end

      articles_json << @article.conv_to_json(@rendered_page_template)

    end

    articles_json
  end

end