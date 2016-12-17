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
     child = Child.find_by_id(params[:child_id])
     event = child.events.build(event_params)
   
    if event.save
      puts params.inspect
      render json: event
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end


    private

    def event_params
      params.require(:event).permit(:mood, :comment, :child_id, :event_time, :activity_id)
    end

end