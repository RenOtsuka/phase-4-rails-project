class ItemsController < ApplicationController
  before_action :authorize

  def index
    items = Item.all
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
    item = Item.find(session[:user_id])
    item.update(item_params)
    render json: item, status: :accepted
  end

  def destroy
    item = Item.find(session[:user_id])
    item.destroy
    head :no_content
  end

  private 

  def item_params 
    params.permit(:name, :quantity)
  end

  def authorize
    return render json: {errors: ["User Not Logged In"]}, status: :unauthorized unless session.include? :user_id
  end

end
