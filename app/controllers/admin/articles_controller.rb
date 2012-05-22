#encoding: utf-8
class Admin::ArticlesController < Admin::AdminController
  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(params[:article])

    if @article.save
      redirect_to admin_articles_path, :notice => '성공적으로 저장'
    else 
      redirect_to request.referer, :alert => '실패'
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    if @article.update_attributes(params[:article])
      redirect_to admin_articles_path, :notice => '성공적으로 업데이트'
    else 
      redirect_to request.referer, :alert => '실패'
    end
  end

  def destroy
    @article = Article.find(params[:id])

    @article.destroy
    redirect_to admin_articles_path, :notice => '성공적으로 삭제'
  end
end