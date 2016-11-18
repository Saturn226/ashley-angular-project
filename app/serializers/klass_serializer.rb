class KlassSerializer < ActiveModel::Serializer
  attributes :id, :room_number
  has_one :user
  has_many :children
end