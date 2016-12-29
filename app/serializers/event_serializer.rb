class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_time, :comment, :mood, :child_id, :activity, :created_at, :updated_at
  #root: :activities_attributes

  has_one :child
  has_one :activity
end
