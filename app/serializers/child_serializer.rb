class ChildSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :notes, :klass_id
  has_many :events
  has_one :klass
  #has_one :user, serializer: UserSerializer

end