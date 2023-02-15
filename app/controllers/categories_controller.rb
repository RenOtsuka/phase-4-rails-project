class CategoriesController < ApplicationController
  before_action :authorize

  def index
    categories = Category.all
    render json: categories, status: :ok
  end

  def create
    category = Category.create(category_params)
    if category.valid?
      render json: category, status: :created
    else
      render json: {errors: category.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def category_params
    params.permit(:name)
  end

  def authorize
    return render json: {errors: ["User Not Logged In"]}, status: :unauthorized unless session.include? :user_id
  end


end
