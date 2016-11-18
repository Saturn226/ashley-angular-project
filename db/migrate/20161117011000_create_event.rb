class CreateEvent < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :activity_id
      t.string :mood
      t.string :comment
      t.integer :child_id
      t.integer :activity_id
      t.datetime :event_time
    end
  end
end
