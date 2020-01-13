# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

User.destroy_all
Movie.destroy_all

# User seeds
demo = User.create!({username:"RottenEgg", password:"iamarotten"})
user1 = User.create!({username:"Helen Yu", password:"iamarotten", top_critic:"true"})

# Movie seeds
movie1 = Movie.create!({
    title: "Always be my maybe",
    info: "On Netflix May 31, 2019"
    genres: "Romance",
    status: "Released" 
})

movie2 = Movie.create!({
    title: "Crazy Rich Asians",
    info: "On theater August 7, 2018"
    genres: "Romance",
    status: "Released" 
})

movie3 = Movie.create!({
    title: "Cats",
    info: "On theater December 20, 2019"
    genres: "Fantasy",
    status: "Released" 
})

movie4 = Movie.create!({
    title: "The Dark Knight",
    info: "On theater July 18, 2008"
    genres: "Action",
    status: "Classic" 
})



end