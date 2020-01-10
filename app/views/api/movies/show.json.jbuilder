json.movie do
  json.extract! @movie, :id, :title, :genres, :status, :info
end

