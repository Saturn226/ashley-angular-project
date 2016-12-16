class Activity < ActiveRecord::Base
  has_many :events
  has_many :children, through: :events
  validates :name, uniqueness: {case_sensitive: false}
end