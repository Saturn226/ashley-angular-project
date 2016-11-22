class KlassSerializer < ActiveModel::Serializer
  attributes :id, :room_number, :user
  
  has_many :children
end



