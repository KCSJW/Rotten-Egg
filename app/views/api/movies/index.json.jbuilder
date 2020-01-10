@movies.each do |movie|
  json.movies do
    json.set! movie.id do
      json.extract! movie, :id, :info, :title, :genres, :status
    end
  end
end
