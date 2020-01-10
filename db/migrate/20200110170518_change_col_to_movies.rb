class ChangeColToMovies < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :type, null: false
    add_column :movies, :genres, :string, null: false
  end
end
