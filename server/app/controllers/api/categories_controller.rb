class Api::CategoriesController < ApplicationController
  before_action :set_category, only: [:update, :destroy]

  def categories
    begin
      @categories = Category.all.select('id, name')
      render json: { status: 200, data: @categories }
    rescue Exception => e
      render json: { status: 503 }
    end
  end

  def create
    begin
      @category = Category.new(category_params)
      if @category.save
        render json: { status: 200, data: @category }
      else
        render json: { status: 503 }
      end
    rescue Exception => e
      render json: { status: 503 }
    end
  end

  def update
    begin
      @category = Category.find(params[:id])

      if @category.update(category_params)
        render json: { status: 200 }
      else
        render json: { status: 503 }
      end
    rescue Exception => e
      render json: { status: 503 }
    end
  end

  def destroy
    begin
      @category = Category.find(params[:id])

      if @category.destroy
        render json: { status: 200 }
      else
        render json: { status: 503 }
      end
    rescue Exception => e
      render json: { status: 503 }
    end
  end

  private
  def set_category
    @category = Category.find(params[:id])
  end

  def category_params
      params.require(:category).permit(:name)
  end

end
