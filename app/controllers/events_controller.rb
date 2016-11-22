class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update,:destroy]

  def index
    events = Event.all
    render json: events
  end
end