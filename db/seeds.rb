# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(:username=> "JohnSmith", :password=>"password")
Child.create(:first_name=>"Ashley", :last_name=>"Muller", :age=>"26", :klass_id => 1)
Child.create(:first_name=>"Bob", :last_name=>"Horton", :age=>"6", :klass_id => 1)
Child.create(:first_name=>"David", :last_name=>"Allen", :age=>"4", :klass_id => 1)

Klass.create(:room_number=>"102")
