class UsersController < ApplicationController

  skip_before_action :authorize, only:[:create]

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index 
    users = User.all
    render json: users, status: :ok
  end

  def show
    user = find_current_user
    render json: user, status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  
  def render_not_found_response
    render json: {error: "User not found"}, status: :not_found
  end

end
