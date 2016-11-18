class CreateChild < ActiveRecord::Migration
  def change
    create_table :children do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.integer :klass_id
      t.string :notes
    end
  end
end
