class TodolistController < ApplicationController
  
  def index
    list = ToDoList.all
    render json: list, status: :ok
  end

  def create
    user = User.find(session[:user_id]) 
    list = user.list.create(list_params)
    if list.valid?
      render json: list, status: :created
    else
      render json: {errors: list.errors.full_messages}, status: :unprocessable_entity
    end
  end


  def update
    list = User.find(session[:user_id])
    list.update(list_params)
    render json: list, status: :accepted
  end

  def destroy
    list = User.find(session[:user_id])
    list.destroy
    head :no_content
  end

  private

  def list_params
    params.permit(:title)
  end

end
