class Movie < ApplicationRecord
    validates :title, :info, :type, :status, presence: true
end
