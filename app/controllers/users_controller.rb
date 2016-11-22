class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit]

  def show
    user = User.find_by_id(params[:id])
    render json: user
  end

  def edit
  end
end