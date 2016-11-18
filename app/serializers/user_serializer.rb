class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
  has_one :klass
  has_many :children
end