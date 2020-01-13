json.extract! reviews, :id, :body
json.authorId reviews.author_id 
json.movieId reviews.movie_id
author = User.find(reviews.author_id)

if author.user_photo.attached?
    json.user_photo url_for(author.user_photo)
end 