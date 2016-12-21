class Event < ActiveRecord::Base
  belongs_to :activity
  belongs_to :child
  accepts_nested_attributes_for :activity

  validates :activity_id, presence: true
end

