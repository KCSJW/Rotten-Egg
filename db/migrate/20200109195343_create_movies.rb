class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.text :info, null: false
      t.string :type, null: false
      t.string :status, null: false

      t.timestamps
    end
  end
end
