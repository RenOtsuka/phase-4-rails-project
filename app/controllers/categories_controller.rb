class CategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  # before_action :authorize

  def index
    # user = User.find(session[:user_id])
    # user_categories = user.categories
    categories = Category.all
    render json: categories, status: :ok
  end

  def show
    user = User.find(session[:user_id])
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

  def authorize
    return render json: {errors: ["User Not Logged In"]}, status: :unauthorized unless session.include? :user_id
  end

  # def render_unprocessable_entity_response(invalid)
  #   render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  # end


  def render_not_found_response
    render json: { error: "Category not found" }, status: :not_found
  end

end
