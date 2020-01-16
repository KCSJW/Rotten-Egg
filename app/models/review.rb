class Review < ApplicationRecord
    validates :body, :rating, :author_id, :author_name, :movie_id, presence: true

    belongs_to :movie,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Movie

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
