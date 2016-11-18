class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :klass


  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end

  def name
    self.first_name + " " + self.last_name
  end
end
