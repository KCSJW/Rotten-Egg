json.movie do
  json.extract! @movie, :id, :title, :type, :status, :info
end

