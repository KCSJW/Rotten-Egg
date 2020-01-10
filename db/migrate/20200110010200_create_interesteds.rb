class CreateInteresteds < ActiveRecord::Migration[5.2]
  def change
    create_table :interesteds do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false

      t.timestamps
      end
      add_index :interesteds, :user_id
      add_index :interesteds, :movie_id
  end
end
