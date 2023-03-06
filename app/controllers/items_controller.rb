class ItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :authorize

  def index
    user = User.find(session[:user_id])
    items = user.items
    render json: items, status: :ok
  end

  def create
    user = User.find(session[:user_id])
    item = user.items.create(item_params)
    if item.valid?
      render json: item, status: :created
    else
      render json: {errors: item.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    item = Item.find(params[:id])
    if item[:user_id]
      item.update(item_params)
      render json: item, status: :accepted
    else
      render json: {errors: "Item not associated with this user"}, status: :unprocessable_entity
    end
  end

  def destroy
    item = Item.find(params[:id])
    if item[:user_id]
      item.destroy
      head :no_content
    else
      render json: {errors: "Item not associated with this user"}, status: :unprocessable_entity
    end
  end

  private 

  def item_params 
    params.permit(:name, :quantity, :user_id, :category_id)
  end

  def authorize
    return render json: {errors: ["User Not Logged In"]}, status: :unauthorized unless session.include? :user_id
  end

  def render_not_found_response
    render json: {error: "Item not found"}, status: :not_found
  end

end
