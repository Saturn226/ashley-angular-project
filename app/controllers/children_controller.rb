class ChildrenController < ApplicationController
  def index
    children = Child.all
    render json: children
  end

  def show
    child = Child.find_by_id(params[:id])
    render json: child
  end

  def create
    child = current_user.klass.children.build(child_params)
    if child.save
      render json: {status: "ok"}
    else
      render json:
        {errors: child.errors.full_messages},
        status: :unprocessable_entity
    end
  end

  def update
    child = Child.find_by_id(params[:id])
    if child.update(child_params)
      render json: {statu: 'ok'}
    else
      render json:
        {errors: child.error.full_messages},
        status: :unprocessable_entity
    end
  end

  def events
    child = Child.find_by_id(params[:id])
    events = Event.where(child_id: child)
    render json: events
  end

  def destroy
    child = Child.find_by_id(params[:id])
    if child.user == current_user
    end
  end

  private

  def child_params
    params.require(:child).permit(:first_name, :last_name, :age, :notes)
  end
end