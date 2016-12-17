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
    #raise params.inspect
     child = Child.find_by_id(params[:child_id])
     # event = child.events.build(comment: event_params[:comment],
     #  mood: event_params[:mood])

     # event.activity = Activity.find(event_params[:activity][:id])
     event = child.events.build(event_params)
   
    if event.save
      puts params.inspect
      render json: event
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end

#({"event"=>{"comment"=>"Testing", "activity"=>{"id"=>8, "name"=>"Nap"}}, "controller"=>"events", "action"=>"create", "child_id"=>"2"})

    private

    def event_params
      params.require(:event).permit(:mood, :comment, :child_id, :event_time, :activity_id, :activity=>[:name, :id])

        #params.require(:event).permit(:mood, :comment, :event_time, :child_id, :activity=>{:name}, :activity_id, :activities_attributes => [:name,:id])
    end

end