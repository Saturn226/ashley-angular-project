class CreateKlass < ActiveRecord::Migration
  def change
    create_table :klasses do |t|
      t.integer :room_number
      t.integer :user_id
    end
  end
end
