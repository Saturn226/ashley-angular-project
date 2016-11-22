class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :klass
  has_many :children
end