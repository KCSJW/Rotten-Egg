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
    title: "The Lord of the Rings: The Return of the King",
    info: "The final battle for Middle-earth begins. Frodo and Sam, led by Gollum, continue their dangerous mission toward the fires of Mount Doom in order to destroy the One Ring.",
    genres: "Action",
    status: "On theater Dec 17, 2003"
})

movie2 = Movie.create!({
    title: "The Godfather",
    info: "Popularly viewed as one of the best American films ever made, the multi-generational crime saga The Godfather is a touchstone of cinema: one of the most widely imitated, quoted, and lampooned movies of all time.",
    genres: "Drama",
    status: "On theater Mar 24, 1972"
})

end