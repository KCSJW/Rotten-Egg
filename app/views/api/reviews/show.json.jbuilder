json.reviews do
    json.set! @review.id do
        json.partal 'api/movies/reviews', review: @review
    end
end