class Klass < ActiveRecord::Base
  belongs_to :user
  has_many :children
end