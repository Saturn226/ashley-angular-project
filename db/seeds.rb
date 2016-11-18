# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

t = User.create(:first_name=>"John", :last_name=>"Smith", :password=>"password")
ch = Child.create(:first_name=>"Ashley", :last_name=>"Muller", age=>"26")
cl = Klass.create(:room_number=>"102")