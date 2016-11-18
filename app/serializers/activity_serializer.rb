class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :children
  has_many :events
end