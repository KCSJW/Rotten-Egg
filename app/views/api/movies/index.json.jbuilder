@movies.each do |movie|
  json.movies do
    json.set! movie.id do
      json.extract! movie, :id, :info, :title, :type, :status
    end
  end
end
