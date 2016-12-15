class EventsController < ApplicationController
  #before_action :authenticate_user!, only: [:create, :update,:destroy]

  def index
    events = Event.all
    render json: events
  end

  def new
    event = event.new
    render json: event
  end

  def create
     #event = current_user.events.build(event_params)
     child = Child.find_by_id(params[:child_id])
     event = child.events.build(event_params)
     event.activity.id = event_params[:activity_id]

        if event.save
          puts params.inspect
          render json: event
        else
          render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
        end
  end


  # def show
  #   child = Child.find_by_id(params[:id])
  #   events = Event.where(child_id: child)
  #   render json: events
  # end

    private

    def event_params
        params.require(:event).permit(:mood, :comment, :event_time, :child_id, :activity, :activity_id, :activities_attributes => [:name,:id])
    end

    # def activity_params
    #   params.require(:activity).permit(:name)
    # end

end