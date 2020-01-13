json.extract! user, :id, :username

if user.user_photo.attached? 
    json.user_photo url_for(user.user_photo)
end