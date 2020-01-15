json.extract! @movie, :id, :title, :genres, :status, :info, :image_url


json.reviews do
  @movie.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :author_name, :body, :rating, :movie_id, :author_id
    end
  end
end