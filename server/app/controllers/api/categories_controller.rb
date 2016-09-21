class Api::CategoriesController < ApplicationController
  def categories
    begin
      @categories = Category.all.select('id, name')
      render json: { status: 200, data: @categories }
    rescue Exception => e
      render json: { status: 503 }
    end
  end
end
