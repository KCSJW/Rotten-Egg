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
Review.destroy_all

# User seeds
demo = User.create!({username:"RottenEgg", password:"iamrotten"});
user0 = User.create!({username:"dude", password:"iamrotten", top_critic:"true"});
user1 = User.create!({username:"Helen Yu", password:"iamrotten", top_critic:"true"});
user2 = User.create!({username:"David Chin", password:"iamrotten", top_critic:"true"});
user3 = User.create!({username:"___ Walker", password:"iamrotten", top_critic:"true"});
user4 = User.create!({username:"Tatiana F", password:"iamrotten", top_critic:"true"});
user5 = User.create!({username:"Helen Cheung", password:"iamrotten", top_critic:"true"});
user6 = User.create!({username:"Jen Kennedy", password:"iamrotten", top_critic:"true"});
user7 = User.create!({username:"Julius Wu", password:"iamrotten", top_critic:"true"});
user8 = User.create!({username:"Linda L", password:"iamrotten", top_critic:"true"});
user9 = User.create!({username:"Sarah J", password:"iamrotten", top_critic:"true"});
user10 = User.create!({username:"Forgot Return", password:"iamrotten", top_critic:"true"});
user11 = User.create!({username:"Dan Li", password:"iamrotten", top_critic:"true"});
user12 = User.create!({username:"Dennis C", password:"iamrotten", top_critic:"true"});
user13 = User.create!({username:"Brian Tran", password:"iamrotten", top_critic:"true"});
user14 = User.create!({username:"Mike Madsen", password:"iamrotten", top_critic:"true"});
user15 = User.create!({username:"Elson Li", password:"iamrotten", top_critic:"true"});
user16 = User.create!({username:"Julius Wu", password:"iamrotten", top_critic:"true"});
user17 = User.create!({username:"Jason Wu", password:"iamrotten", top_critic:"true"});
user18 = User.create!({username:"Joe Bumbaca", password:"iamrotten", top_critic:"true"});
user19 = User.create!({username:"abc", password:"iamrotten", top_critic:"true"});


# Movie seeds
movie1 = Movie.create!({
    title: "Always be my maybe",
    info: "On Netflix May 31, 2019",
    genres: "Romance",
    status: "Reunited after 15 years, famous chef Sasha and hometown musician Marcus feel the old sparks of attraction but struggle to adapt to each other's worlds.",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/always_be_my_maybe.jpg"
});

movie2 = Movie.create!({
    title: "Crazy Rich Asians",
    info: "On theater August 7, 2018",
    genres: "Romance",
    status: "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/cra.jpg"
});

movie3 = Movie.create!({
    title: "Cats",
    info: "On theater December 20, 2019",
    genres: "Fantasy",
    status: "A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/cat.jpg"
});

movie4 = Movie.create!({
    title: "The Dark Knight",
    info: "On theater July 18, 2008",
    genres: "Action",
    status: "With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. They soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known as the Joker.",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/dark_knight.jpg"
});

movie5 = Movie.create!({
    title: "Pokemon Detective Pikachu",
    info: "On theater May 10, 2019",
    genres: "Action",
    status: "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective." ,
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/detective_pikachu.jpg"
});

movie6 = Movie.create!({
    title: "The Devil Wears Prada",
    info: "On theater June 30, 2006",
    genres: "Comedy",
    status: "Andy moves to New York to work in the fashion industry. Her boss is extremely demanding, cruel and won't let her succeed if she doesn't fit into the high class elegant look of their magazine.",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/devil_wears_prada.jpg"
});

movie7 = Movie.create!({
    title: "Dragonball Evolution",
    info: "On theater April 8, 2009",
    genres: "Action",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/dragonball.jpg",
    status: "The young warrior Son Goku sets out on a quest, racing against time and the vengeful King Piccolo, to collect a set of seven magical orbs that will grant their wielder unlimited power."
});

movie8 = Movie.create!({
    title: "The Godfather",
    info: "On theater March 15, 1972",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/godfather.jpg",
    status: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge." 
});

movie9 = Movie.create!({
    title: "The Great Wall",
    info: "On theater February 17, 2017",
    genres: "Action",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/great_wall.jpg",
    status: "European mercenaries searching for black powder become embroiled in the defense of the Great Wall of China against a horde of monstrous creatures." 
});

movie10 = Movie.create!({
    title: "The Incredibles",
    info: "On theater November 5, 2004",
    genres: "Action",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/incredibles.jpg",
    status: "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume." 
});

movie11 = Movie.create!({
    title: "The Interview",
    info: "On theater December 25, 2014",
    genres: "Comedy",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/interview.jpg",
    status: "Dave Skylark and his producer Aaron Rapaport run the celebrity tabloid show \"Skylark Tonight\". When they land an interview with a surprise fan, North Korean dictator Kim Jong-un, they are recruited by the CIA to turn their trip to Pyongyang into an assassination mission." 
});

movie12 = Movie.create!({
    title: "Joker",
    info: "On theater October 4, 2019",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/joker.jpg",
    status: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure." 
});

movie13 = Movie.create!({
    title: "Knives Out",
    info: "On theater November 27, 2019",
    genres: "Thriller",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/knives_out.jpg",
    status: "When renowned crime novelist Harlan Thrombey is found dead at his estate, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death." 
});

movie14 = Movie.create!({
    title: "The Last Black Man In San Francisco",
    info: "On theater June 7, 2019",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/last_blackman.jpg",
    status: "Jimmie Fails dreams of reclaiming the Victorian home his grandfather built in the heart of San Francisco. Joined on his quest by his best friend Mont, Jimmie searches for belonging in a rapidly changing city that seems to have left them behind." 
});

movie15 = Movie.create!({
    title: "Pan's Labyrinth",
    info: "On theater October 15, 2006",
    genres: "Fantasy",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/pan_labyrinth.jpg",
    status: "Living with her tyrannical stepfather in a new home with her pregnant mother, 10-year-old Ofelia feels alone until she explores a decaying labyrinth guarded by a mysterious faun who claims to know her destiny. If she wishes to return to her real father, Ofelia must complete three terrifying tasks." 
});

movie16 = Movie.create!({
    title: "Ratatouille",
    info: "On theater June 22, 2007",
    genres: "Animation",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/ratatouille.jpg",
    status: "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down." 
});

movie17 = Movie.create!({
    title: "The Lord of the Rings: The Return of the King",
    info: "On theater December 17, 2003",
    genres: "Adventure",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/return_of_king.jpg",
    status: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm." 
});

movie18 = Movie.create!({
    title: "The Revenant",
    info: "On theater January 8, 2016",
    genres: "Adventure",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/revenant.jpg",
    status: "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling." 
});

movie19 = Movie.create!({
    title: "Rush Hour 2",
    info: "On theater August 3, 2001",
    genres: "Comedy",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/rh2.jpg",
    status: "It's vacation time for Carter as he finds himself alongside Lee in Hong Kong wishing for more excitement. Lee is out to track down a Triad gang lord who may be responsible for killing two men at the American Embassy. The boys are soon up to their necks in fist fights and life-threatening situations." 
});

movie20 = Movie.create!({
    title: "Star Wars: The Rise of Skywalker",
    info: "On theater December 20, 2019",
    genres: "Adventure",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/rise_of_sky_walker.jpg",
    status: "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins." 
});

movie21 = Movie.create!({
    title: "Searching",
    info: "On theater August 24, 2018",
    genres: "Thriller",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/searching.jpg",
    status: "After David Kim's 16-year-old daughter goes missing, a local investigation is opened and a detective is assigned to the case. But 37 hours later and without a single lead, David decides to search the one place no one has looked yet, where all secrets are kept today: his daughter's laptop." 
});

movie22 = Movie.create!({
    title: "Toy Story 4",
    info: "On theater June 21, 2019",
    genres: "Animation",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/toy_story.jpg",
    status: "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy." 
});

movie23 = Movie.create!({
    title: "Up",
    info: "On theater May 28, 2009",
    genres: "Animation",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/up.jpg",
    status: "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life." 
});

movie24 = Movie.create!({
    title: "Argo",
    info: "On theater October 12, 2012",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/Argo.jpg",
    status: "As the Iranian revolution reaches a boiling point, a CIA 'exfiltration' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador." 
});

movie25 = Movie.create!({
    title: "Ex machina",
    info: "On theater April 24, 2015",
    genres: "Science Fiction",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/ex_machina.jpg",
    status: "Caleb, coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives he finds out he will participate in an experiment which he must interact with the world's first true AI robot girl." 
});

movie26 = Movie.create!({
    title: "Weathering with You | 天気の子",
    info: "On theater January 17, 2020",
    genres: "Animation",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/wwy.jpg",
    status: "Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end." 
});

movie27 = Movie.create!({
    title: "Parasite | 기생충",
    info: "On theater October 11, 2019",
    genres: "Thriller",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/parasite.jpg",
    status: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident." 
});

movie28 = Movie.create!({
    title: "Aquaman",
    info: "On theater December 21, 2018",
    genres: "Action",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/aquaman.jpg",
    status: "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne." 
});

movie29 = Movie.create!({
    title: "Alita: Battle Angel",
    info: "On theater February 14, 2019",
    genres: "Action",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/aba.jpg",
    status: "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past." 
});

movie30 = Movie.create!({
    title: "You Name. | 君の名は。",
    info: "On theater April 7, 2017",
    genres: "Romance",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/your_name.jpg",
    status: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other." 
});

movie31 = Movie.create!({
    title: "Fight Club",
    info: "On theater October 15, 1999",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/fight_club.jpg",
    status: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion." 
});

movie32 = Movie.create!({
    title: "The Legend of 1900",
    info: "On theater October 28, 1998",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/1900.jpg",
    status: "The story of a virtuoso piano player who lives his entire life aboard an ocean liner. Born and raised on the ship, 1900 (Tim Roth) learned about the outside world through interactions with passengers, never setting foot on land. Years later, the ship may be destroyed, and a former band member fears that 1900 may go down with the ship." 
});

movie33 = Movie.create!({
    title: "Logan",
    info: "On theater March 3, 2017",
    genres: "Drama",
    image_url: "https://active-storage-rotten-egg-dev.s3-us-west-1.amazonaws.com/logan.jpg",
    status: "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces." 
});

#reviews seed
review1 = Review.create!({
    body: 'Ratatouille has mastered the art of Pixar perfection, one delicious morsel at a time. The movie has a dazzling magic about it that transports you to the heart of Paris.',
    rating: 8,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie16.id
});

review2 = Review.create!({
    body: 'Meryl Streep puts on a performance worthy of an Oscar, with Anne Hathaway under her tutelage. However, the plot meanders unconvincingly, only to end up at a somewhat unsatisfying finish.',
    rating: 6,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie6.id
});

review3 = Review.create!({
    body: 'A masterpiece. Like a knife prop - so many surprising turns.',
    rating: 10,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie13.id
});

review4 = Review.create!({
    body: 'With incredibly memorable lines and witty dialogue, the Incredibles is a movie that one would never get bored of watching.',
    rating: 10,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie10.id
});

review5 = Review.create!({
    body: 'Excellent story-telling, in a nut shell. Brando and Pacino portray their roles incredibly convincingly.',
    rating: 10,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie8.id
});

review6 = Review.create!({
    body: 'Chan and Tucker perform the comedic role well, delivering a very enjoyable and funny film.',
    rating: 4,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie19.id
});

review7 = Review.create!({
    body: 'While DiCaprio and Hardy give the performance of a lifetime, and each camera shot seems to be worthy of a background screen or postcard souvenir, the overall whole is less than the sum of its parts.',
    rating: 6,
    author_name: user1.username,
    author_id: user1.id,
    movie_id: movie18.id
});

review8 = Review.create!({
    body: 'Great music and well delivered lines by Albert. Christopher Nolan works his magic into weaving a spectacular production!',
    rating: 9,
    author_name: user2.username,
    author_id: user2.id,
    movie_id: movie4.id
});

review9 = Review.create!({
    body: 'Overhyped and underwhelming. They literally had the best material to work with and didn\'t impress. Literal definition of \"You had one job.\"',
    rating: 4,
    author_name: user2.username,
    author_id: user2.id,
    movie_id: movie5.id
});

review10 = Review.create!({
    body: 'This movie was one of the best I have ever seen. I have no idea what was happening the entire time, but who doesn\'t like cats. Lots of dancing, singing, random stuff. 10 out of 10 would meow again.',
    rating: 10,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie3.id
});

review11 = Review.create!({
    body: 'Kanye West may have his own beautiful dark twisted fantasy, but for the rest of us, it\'s got to be Pan\'s Labyrinth. Set in the years after the Spanish civil war, this film intertwines the real world with a mythical one, involving fauns, crying mandrake roots, and the spooky child-devouring Pale Man. A stellar film very much worth seeing.',
    rating: 10,
    author_name: user4.username,
    author_id: user4.id,
    movie_id: movie15.id
});

review12 = Review.create!({
    body: 'Star Wars: Rise of Sam Walker! Only gave it more than 1 because I love star wars but man I am sick of how the "good" always win and the evil doesn\'t ever seem to have a deeper motive than just to randomly conquer everything. Where are all the complicated villains at.',
    rating: 2,
    author_name: user5.username,
    author_id: user5.id,
    movie_id: movie20.id
});

review13 = Review.create!({
    body: 'Entertaining.',
    rating: 10,
    author_name: user6.username,
    author_id: user6.id,
    movie_id: movie20.id
});

review14 = Review.create!({
    body: 'There are no dogs in it!',
    rating: 1,
    author_name: user7.username,
    author_id: user7.id,
    movie_id: movie3.id
});

review15 = Review.create!({
    body: 'Everyone needs a Sam in their life!',
    rating: 10,
    author_name: user7.username,
    author_id: user7.id,
    movie_id: movie17.id
});

review16 = Review.create!({
    body: 'Funny, exciting plot. Lots of twists. Great for a night out or a team offsite.',
    rating: 8,
    author_name: user8.username,
    author_id: user8.id,
    movie_id: movie13.id
});

review17 = Review.create!({
    body: 'The Last Black Man in San Francisco delicately treads between a dream-like, elegaic love song to San Francisco and its denizens-present and pushed out, and a cautionary tale of nostalgia and imagined history crippling the possibility of living in the present. The score by first-time composer accentuates this juxtaposition, with long epic sequences fitting of a romantic odyssey story, punctuated by more post-modern refrains. This is a must watch whether or not you “love San Francisco enough to hate it”.',
    rating: 8,
    author_name: user9.username,
    author_id: user9.id,
    movie_id: movie14.id
});

review18 = Review.create!({
    body: 'First of all, I have not watched the other Joker movies. That aside, this was a good movie. Maybe not for the faint of heart, as it\'s pretty dark. But if you were to step inside the Joker\'s shoes, maybe you\'d understand why he is who is... Who he is. All that s**t from his childhood, that didn\'t help with his social... I\'m not going to spill it for you. Go watch the movie. But be warned.',
    rating: 10,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie12.id
});

review19 = Review.create!({
    body: 'What. Da. Eff. Is this? Hollywood still hasn\'t learned its lesson. FFS, why would you cast a white dude as Goku? Like, why?! Look, this movie has a lot to stand up to. Internationally. You need to make it look believable, relatable. The storyline needs to stick. The story line did not stick. As if the casting of Goku was not insulting enough, you\'ve got Chow who didn\'t really bring out Master Roshi\'s cheerful demeanor. Also, DO NOT hold your guns like they do in this movie, or I\'ll have you removed from the range I\'m at. Everyone else is Asian, but Goku is white. Way to go to h**l.',
    rating: 0,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie7.id
});

review20 = Review.create!({
    body: 'This is a good example of Zhang Yimou trying to break out of China and get his name known throughout the Blue Planet. The name might be tacky in English but isn\'t so bad in Chinese. The storyline and casting though. Can we please stop casting Matt Damon for fighting roles? Dude always need to get rescued at the end. Zhang might be using Matt to get the movie to catch out West, but the most tasteful job this was not. Matt can\'t even shoot a bow right. (It\'s right there on the poster.) How is he going to be a general? As an Asian American, the uniforms of the generals come off wrong too. Way to push on stereotypes that he never got to deal with. I understand why he wanted to cast Matt, but the story is not something that would interest "Westerners" and would straight offend Asian Americans. It\'s an Asian movie. If anything, cast someone hot FROM ASIA. Takeshi Kaneshiro, Lau, whoever.',
    rating: 0,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie9.id
});

review21 = Review.create!({
    body: 'They\'ve got a fan in me. They\'ve got a fan in me! Nice little intense moments, with bring back characters, twists and turns, and a big WOAH moment at the end.',
    rating: 9,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie22.id
});

review22 = Review.create!({
    body: 'Well, this was nothing short of a travel advertisement for Singapore, but relatable to your average Asian this is not. The extravagant display of wealth with the helicopter and the bazooka party. No, you cannot be driving like that in Singapore, let alone have a bazooka. Perhaps it\'s because of my background. I\'m not mad that they had a Korean play a Chinese, but that family is one functional stereotype I don\'t want to see. Like many other Asian-American movies, there is a touch on the whole West vs East ideology debate with the mother-in-law, but the resolution was awful. The story just hits a wall as the heir just puts everything on halt and asks for girl\'s hand on the airplane. A good effort, but the kind that comes out of an American monocle long after aviators have taken over the world.',
    rating: 4,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie2.id
});

review23 = Review.create!({
    body: 'The movie starts with a storyline that many lovers of k-drama are familiar with. I\'m happy to see John Cho being starred in a movie that is race-irrelevant, but please, enough with the terminally ill women!',
    rating: 7,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie21.id
});

review24 = Review.create!({
    body: 'Bah!!! That\'s a cheap shot at getting people\'s emotions up at the beginning! Absolutely terrible!',
    rating: 2,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie23.id
});

review25 = Review.create!({
    body: 'Ah, this one feels close to home. Cultural cliches and stereotypes aside, this was nice.',
    rating: 9,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie1.id
});

review26 = Review.create!({
    body: 'Argh, this is one of those frat boy movies, eh? I guess I should applaud the main actors for acting so well in character? My opinion, but I do feel that the two characters are quite representative of the carelessness that can be found among reigning and former frat brothers, and how that behavior affects the world. You can argue about the Asian stereotypes, but I\'m not a fan.',
    rating: 5,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie11.id
});

review27 = Review.create!({
    body: 'I didn’t expect the movie to be so good. It turned out the director and actors all did great job. I liked the last minute twist on the plot and surprised by how each character came together and made the whole story so vivid. The movie is funny, well finished and totally a good choice if you want to unwind yourself after a busy week!',
    rating: 10,
    author_name: user11.username,
    author_id: user11.id,
    movie_id: movie13.id
});

review28 = Review.create!({
    body: 'It is the worst Star War movie ever made! The pacing of the movie is so frantic that it feels like three movies have been jammed into one. There are more plot holes in this movie than the pimples on a teenager\'s face. The resurrection of Palpatine renders the sacrifice (and redemption) of Darth Vader in Episode VI utterly meaningless. Both Ryan Johnson and J. J. Abrams are responsible for the mess of the new trilogy. But ultimately, the blame should be put on Kathleen Kennedy. Kennedy has to go before there is any hope for Disney\'s future Star Wars movies. Do yourself a favor and skip this movie!',
    rating: 3,
    author_name: user12.username,
    author_id: user12.id,
    movie_id: movie20.id
});

review29 = Review.create!({
    body: 'Joker (2019) is a fresh take on the mythology of one of the most beloved DC characters ever. Spoiler alert: there is no acid bath involved in the formation of this version of the Joker. ‎Joaquin Phoenix\'s Joker is a product of mental illness and social apathy. The story is not particularly strong. However, the movie is saved by Phoenix\'s award-worthy performance and the felicitous soundtracks. The social commentary on the class struggle is particularly apt for the tumultuous year of 2019. You might need to watch this movie a couple of times to know which scene is real and which scene is Arthur Fleck\'s imagination. The dance scene on the stairs will go down as one of the most iconic movie scenes in the last decade. I cannot recommend this movie highly enough!',
    rating: 9,
    author_name: user12.username,
    author_id: user12.id,
    movie_id: movie12.id
});

review30 = Review.create!({
    body: 'I like the part with the explosions.',
    rating: 10,
    author_name: user14.username,
    author_id: user14.id,
    movie_id: movie4.id
});

review31 = Review.create!({
    body: 'I saw this with my real godfather and it was very unsettling. He loved the movie but I was very weirded out, and then he pranked me by putting a horse head in my bed when I was sleeping. NOT FUNNY. Brando and Pacino did portray their roles convincingly, however.',
    rating: 3,
    author_name: user14.username,
    author_id: user14.id,
    movie_id: movie8.id
});


review32 = Review.create!({
    body: 'Sons of Gondor, of Rohan, my brothers... I see in your eyes, the same fear that would take the heart of me. A day may come, when the courage of Men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day. An hour of wolves and shattered shields when the age of men comes crashing down. But it IS NOT THIS DAY. This day WE FIGHT! By all that you hold dear... on this good earth... I bid you STAND! MEN of the WEST!',
    rating: 10,
    author_name: user14.username,
    author_id: user14.id,
    movie_id: movie17.id
});


review33 = Review.create!({
    body: 'Chris Tucker plays the role of his lifetime, while Jackie Chan crystallizes his status as the all time MVP of martial arts in comedy movies. This movie not only showcases the Hong Kong style of action/fighting movies, but delivers side splitting laughs and gaffs throughout. A very enjoyable and funny film.',
    rating: 10,
    author_name: user14.username,
    author_id: user14.id,
    movie_id: movie19.id
});

review34 = Review.create!({
    body: 'On the surface a look at how independent AI may work, but underneath is an interesting look at how human psychology does work, but maybe there is a difference between the two.',
    rating: 8,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie25.id
});

review35 = Review.create!({
    body: 'Good story into a lesser known part of modern history. Seems unreal but did happen. Learned to say Toronto correctly, the way Tom Clark would. Ben Affleck doesn\'t play a brown person very well, however.',
    rating: 8,
    author_name: user10.username,
    author_id: user10.id,
    movie_id: movie24.id
});

review36 = Review.create!({
    body: '"Adventure is out there". A great movie, one of my favorites. A family movie with plenty of character development and a cute/goofy bunch of characters. Maybe not the happiest/brightest Disney movie out there but it does have a happy ending!',
    rating: 10,
    author_name: user13.username,
    author_id: user13.id,
    movie_id: movie23.id
});

review37 = Review.create!({
    body: 'PIKA PIKA',
    rating: 10,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie5.id
});

review38 = Review.create!({
    body: 'I think this movie was too long. I fell asleep and woke up with a horse head in my bed. I\'m not sure where it came from, but it really weirded me out. I was lucky though, cause I didn\'t have to go shopping for meat for that night\'s stew. Anyways, Brando and Pacino portrayed their roles convincingly.',
    rating: 7,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie8.id
});

review39 = Review.create!({
    body: 'While DiCaprio and Hardy give a performance, I think the real star of this show is the bear. Needs more bear.',
    rating: 3,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie18.id
});

review40 = Review.create!({
    body: 'Needs more Kylo. 10 out of 10. Would *fwoosh* again.',
    rating: 10,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie20.id
});

review41 = Review.create!({
    body: 'This Helen reviewer gives this movie 8 stars, but says it has mastered Pixar perfection. I don\'t know what it would take for them to give a movie a 10 out of 10. 10 out of 10, would rat again.',
    rating: 10,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie16.id
});

review42 = Review.create!({
    body: '10/10',
    rating: 10,
    author_name: user15.username,
    author_id: user15.id,
    movie_id: movie26.id
});

review43 = Review.create!({
    body: 'Bong Joon-ho director did a very good job on bring the hierarchy of the rich and the poor in South Korea. The relationship of how the poor use their ways to live off from the rich. What are the mental difference from two families comes from completely opposite background of the society.',
    rating: 9,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie27.id
});

review44 = Review.create!({
    body: 'If you have it, will you abuse that ability...especially in San Francisco',
    rating: 10,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie26.id
});

review45 = Review.create!({
    body: 'Khal Drogo dressed up like a corn who can swim and talk fish',
    rating: 3,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie28.id
});

review46 = Review.create!({
    body: 'One of the well done manga adaptation movie, strong start for the sequel yet to come. You will feel for Alita\'s pain and things she have to go through and learn to build her up as a strong female character. Very enjoy this movie',
    rating: 8.5,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie29.id
});

review47 = Review.create!({
    body: 'Every Star War fans will remember December 20 2019, the day that Disney finally killed Star War',
    rating: 0,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie20.id
});

review48 = Review.create!({
    body: '‎Joaquin Phoenix totally brings out how any noraml average human can become with mental illness, social apathy and unsympathetic from others. The three different tone of laughter he had in the movie showed as he live in this society he have to adapt and evolve. As an audience you saw the last straw which broke the camel\'s back, and the personality Arthur finally die consumed by the Joker. As we all understand the only way to survive in this world is to adapt and evolve, Arthur evolved to be Joker in order to adapt this unsympathetic and heartless world.',
    rating: 8,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie12.id
});

review49 = Review.create!({
    body: 'One of the best realistic animation artwork plus an interesting plot, very enjoyable.',
    rating: 7,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie30.id
});

review50 = Review.create!({
    body: 'The first rule of Fight Club is: You do not talk about Fight Club. The reason why I do not use soap bar is because this movie',
    rating: 8,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie31.id
});

review51 = Review.create!({
    body: 'One of the my personal favorite movie of all time, the legendary era of America immigration and the start of the golden age. This movie brings out most immigrants\' idea of new hope with all the fear that comes with it. As the main character said in the movie "keys begin, keys end. You know there are 88 of them. Nobody can tell you any different. They are not infinite. You are infinite... And on those keys, the music that you can make... is infinite. I like that. That I can live by."',
    rating: 10,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie32.id
});

review52 = Review.create!({
    body: 'This movie show how relationship between old friends, generations, father and daughter. It is a very good ending for Logan and Professor X as their job of passing down their believe to the next generation of mutants.',
    rating: 9,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie33.id
});

review53 = Review.create!({
    body: 'There are no dogs in it!',
    rating: 0,
    author_name: user16.username,
    author_id: user16.id,
    movie_id: movie3.id
});

review54 = Review.create!({
    body: 'One of the best movies everrrrrrrr',
    rating: 10,
    author_name: user17.username,
    author_id: user17.id,
    movie_id: movie3.id
});

review55 = Review.create!({
    body: 'A movie no one ask for.......',
    rating: 0,
    author_name: user0.username,
    author_id: user0.id,
    movie_id: movie3.id
});

review56 = Review.create!({
    body: 'Still the best Joker performance to date . . . .',
    rating: 10,
    author_name: user18.username,
    author_id: user18.id,
    movie_id: movie4.id
});

review57 = Review.create!({
    body: 'PIKA PIKA',
    rating: 10,
    author_name: user3.username,
    author_id: user3.id,
    movie_id: movie5.id
});

review58 = Review.create!({
    body: 'I\'ve seen it so many times!',
    rating: 10,
    author_name: user18.username,
    author_id: user18.id,
    movie_id: movie10.id
});

review59 = Review.create!({
    body: 'I laughed, I cried, I cooked! Such a great family film!',
    rating: 9,
    author_name: user18.username,
    author_id: user18.id,
    movie_id: movie16.id
});

review60 = Review.create!({
    body: 'Oh Rejean!!! Duke Kaboon steals the show. . . .Definitely a great movie to watch if you are a fan of the original!',
    rating: 10,
    author_name: user18.username,
    author_id: user18.id,
    movie_id: movie22.id
});

review61 = Review.create!({
    body: 'Best movie of the year. Thought it was going to be a scary movie but turned out to be more funny than scary. Well done. Makes me reconsider when I eat free food during happy hours.',
    rating: 10,
    author_name: user19.username,
    author_id: user19.id,
    movie_id: movie27.id
});

review62 = Review.create!({
    body: 'Very disturbing, but a great movie that is hard to enjoy.',
    rating: 8,
    author_name: user17.username,
    author_id: user17.id,
    movie_id: movie27.id
});

end