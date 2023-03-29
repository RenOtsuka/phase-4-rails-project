class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories, status: :ok
  end

  def show
    user = find_current_user
    user_category = user.categories
    render json: user_category, status: :ok
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


  def render_not_found_response
    render json: { error: "Category not found" }, status: :not_found
  end

end
