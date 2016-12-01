class UsersController < ApplicationController
 # before_action :authenticate_user!, only: [:edit]

  def show
    #user = User.find_by_id(params[:id])
    user = User.first
    render json: user
  end

  def edit
    user = current_user
    render json: user
  end

private
  def user_params
    params.require(user)
  end
end