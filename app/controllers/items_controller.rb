class ItemsController < ApplicationController

  def index
    user = find_current_user
    user_items = user.items
    render json: user_items, status: :ok
  end

  def create
    user = find_current_user
    item = user.items.create(item_params)
    if item.valid?
      render json: item, status: :created
    else
      render json: {errors: item.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    item = find_current_item
    if item[:user_id]
      item.update(item_params)
      render json: item, status: :accepted
    else
      render json: {errors: item.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    item = find_current_item
    if item[:user_id]
      item.destroy
      head :no_content
    else
      render json: {errors: "Item not associated with this user"}, status: :unprocessable_entity
    end
  end


  private 

  def find_current_item
    Item.find_by(id: params[:id])
  end


  def item_params 
    params.permit(:name, :quantity, :category_id)
  end

  
  def render_not_found_response
    render json: {error: "Item not found"}, status: :not_found
  end

end


# get "/items/:n", to: "items#find_n"
  # def find_n
  #   byebug
  #   items = Item.where("quantity < ?", params[:n])
  #   # items = Item.select {|item| item.quantity < params[:n].to_i}
  #   users = items.map{|item| item.user}
  #   if !users.empty? 
  #     render json: users, status: :ok
  #   else
  #     render json: {errors: ["No users found"]}, status: :unprocessable_entity
  #   end
  # end

# Make a custom route that takes in a dynamic parameter, call it n, which will then be used in a custom action in the items controller to find all items that have a quantity of less than n. After you find these items, render all the users who are associated with these items as json. If no items are found, and thus no users, render json that says so.