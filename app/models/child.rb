class Child < ActiveRecord::Base
  belongs_to :klass
  has_many :events, dependent: :destroy
  accepts_nested_attributes_for :events
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :age, presence: true

  def name
    self.first_name + " " + self.last_name
  end
end