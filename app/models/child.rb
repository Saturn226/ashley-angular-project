class Child < ActiveRecord::Base
  belongs_to :klass
  has_many :events

  def name
    self.first_name + " " + self.last_name
  end
end