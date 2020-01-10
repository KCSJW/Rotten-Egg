class Movie < ApplicationRecord
    validates :title, :info, :genres, :status, presence: true
    
    has_many :reviews,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Review

    has_many :interested_users,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Interested

    has_many :users,
        through: :interested_users,
        source: :user

end
