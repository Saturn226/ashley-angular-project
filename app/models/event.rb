class Event < ActiveRecord::Base
  belongs_to :activity
  belongs_to :child
end