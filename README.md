# [Rotten Egg](https://rottenegg.herokuapp.com/#/)

A clone web application of Rotten Tomatoes. Handle by React and Redux from the front end of the app and Ruby on Rails for the backend with PostgreSQL database and API from [The Movie DB](https://www.themoviedb.org/). Allowing user to left reviews with ratings for movies on the site as well as read other's reviews.

# Features

### Single-Page App
 
Rotten Egg is a single-page app; all content is delivered on one static page. The root page listens to a SessionStore and renders content based on a call to SessionStore.currentUser(). Sensitive information is kept out of the frontend of the app.

### Movie Ranking Lists and Poster

On Home page of Rotten Egg on the top will show the popular movie poster from [The Movie DB](https://www.themoviedb.org/). Under the posters there are also three lists from the same datebase of the now playing, up coming and top rated movies. The whole index page will update with [The Movie DB](https://www.themoviedb.org/) itself showing the newest movies!

### Ratings

There is a rating score system builded in within the app, there are four different rating icons for all movie will change base on the current rating. All ratings is given by a interactive star rating bar on each individual movie show page and system will calculate all the rating from each reviews than give an average rating score to movie and rating icons will updates with the new review. Also allow user to leave reviews and delete their review later.

### Movie show page

Each movies from the seeded database will have its own show page with thier own information and reivews from users as well as the user's information. Reivews made will automatically show up in the show page, and you have to sign in in order to give review and delete the reviews that belongs to you to protect the reviews you made.

### Search bar 

On top of the app, there is a search bar that links to the backend database. Users can search movies from the PostgreSQL database in anywhere within this web application to navigate themself to different show page. The search page also will self-complete any typing that match the database.

