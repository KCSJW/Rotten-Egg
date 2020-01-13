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
demo = User.create!({username:"RottenEgg", password:"iamarotten"});
user1 = User.create!({username:"Helen Yu", password:"iamarotten", top_critic:"true"});

# Movie seeds
movie1 = Movie.create!({
    title: "Always be my maybe",
    info: "On Netflix May 31, 2019",
    genres: "Romance",
    status: "Released" 
});

movie2 = Movie.create!({
    title: "Crazy Rich Asians",
    info: "On theater August 7, 2018",
    genres: "Romance",
    status: "Released" 
});

movie3 = Movie.create!({
    title: "Cats",
    info: "On theater December 20, 2019",
    genres: "Fantasy",
    status: "Released" 
});

movie4 = Movie.create!({
    title: "The Dark Knight",
    info: "On theater July 18, 2008",
    genres: "Action",
    status: "Classic" 
});

movie5 = Movie.create!({
    title: "Pokemon Detective Pikachu",
    info: "On theater May 10, 2019",
    genres: "Action",
    status: "Released" 
});

movie6 = Movie.create!({
    title: "The Devil Wears Prada",
    info: "On theater June 30, 2006",
    genres: "Comedy",
    status: "Released" 
});

movie7 = Movie.create!({
    title: "Dragonball Evolution",
    info: "On theater April 8, 2009",
    genres: "Action",
    status: "Released" 
});

movie8 = Movie.create!({
    title: "The Godfather",
    info: "On theater March 15, 1972",
    genres: "Drama",
    status: "Classic" 
});

movie9 = Movie.create!({
    title: "The Great Wall",
    info: "On theater February 17, 2017",
    genres: "Action",
    status: "Released" 
});

movie10 = Movie.create!({
    title: "The Incredibles",
    info: "On theater November 5, 2004",
    genres: "Action",
    status: "Released" 
});

movie11 = Movie.create!({
    title: "The Interview",
    info: "On theater December 25, 2014",
    genres: "Comedy",
    status: "Released" 
});

movie12 = Movie.create!({
    title: "Joker",
    info: "On theater October 4, 2019",
    genres: "Drama",
    status: "Released" 
});

movie13 = Movie.create!({
    title: "Knives Out",
    info: "On theater November 27, 2019",
    genres: "Thriller",
    status: "Released" 
});

movie14 = Movie.create!({
    title: "The Last Black Man In San Francisco",
    info: "On theater June 7, 2019",
    genres: "Drama",
    status: "Released" 
});

movie15 = Movie.create!({
    title: "Pan's Labyrinth",
    info: "On theater October 15, 2006",
    genres: "Fantasy",
    status: "Released" 
});

movie16 = Movie.create!({
    title: "Ratatouille",
    info: "On theater June 22, 2007",
    genres: "Animation",
    status: "Released" 
});

movie17 = Movie.create!({
    title: "The Lord of the Rings: The Return of the King",
    info: "On theater December 17, 2003",
    genres: "Adventure",
    status: "Classic" 
});

movie18 = Movie.create!({
    title: "The Revenant",
    info: "On theater January 8, 2016",
    genres: "Adventure",
    status: "Released" 
});

movie19 = Movie.create!({
    title: "Rush Hour 2",
    info: "On theater August 3, 2001",
    genres: "Comedy",
    status: "Released" 
});

movie20 = Movie.create!({
    title: "Star Wars: The Rise of Skywalker",
    info: "On theater December 20, 2019",
    genres: "Adventure",
    status: "Released" 
});

movie21 = Movie.create!({
    title: "Searching",
    info: "On theater August 24, 2018",
    genres: "Thriller",
    status: "Released" 
});

movie22 = Movie.create!({
    title: "Toy Story 4",
    info: "On theater June 21, 2019",
    genres: "Animation",
    status: "Released" 
});

movie23 = Movie.create!({
    title: "Up",
    info: "On theater May 28, 2009",
    genres: "Animation",
    status: "Released" 
});

end