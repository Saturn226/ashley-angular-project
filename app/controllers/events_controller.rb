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
    
  end

  def create
     #event = current_user.events.build(event_params)
     #child = child.find_by_id(params[:child_id])
     event = event.build(event_params)
        if event.save
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
        params.require(:event).permit(:mood, :comment, :event_time, :activity => [:name], :child_id)
    end

end