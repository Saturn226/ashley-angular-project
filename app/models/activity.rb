class Activity < ActiveRecord::Base
  has_many :events
  validates :name, uniqueness: {case_sensitive: false}
end