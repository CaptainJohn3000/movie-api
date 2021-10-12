// Import Express (which sets up a web server)
const express = require('express'),
morgan = require('morgan');
 
const app = express();

//array of objects of my top ten movies
let topMovies = [
    {
        title: 'The Terminal', 
        director: 'Steven Spielberg',
        genre: 'Feel Good, Comedy, Romance',
    },
    {
        title: 'Ready Player One', 
        director: 'Steven Spielberg',
        genre: 'Action, Gaming',
    },
    {
        title: 'The Sum Of All Fears',
        director: 'Phil Alden Robinson',
        genre: 'Action/Adventure',
      },
      {
        title: 'The Lord Of The Rings: The Fellowship Of The Ring',
        director: 'Peter Jackson',
        genre: 'Action/Adventure',
      },
      {
        title: 'Saving Private Ryan', 
        director: 'Steven Spielberg',
        genre: 'Action/Adventure, War',
      },
      {
        title: 'The Replacements', 
        director: 'Howard Deutch',
        genre: 'Comedy, Football',
    },
    {
        title: 'Passengers', 
        director: 'Morten Tyldum',
        genre: 'Thriller',
    },
    {
        title: 'The Last Samurai', 
        director: 'Edward Zwick',
        genre: 'Action/Adventure',
    },
    {
        title: 'Indiana Jones And The Raiders Of The Lost Ark', 
        director: 'Steven Spielberg',
        genre: 'Action/Adventure',
    },
    {
        title: 'Rush', 
        director: 'Ron Howard',
        genre: 'Thriller, Racing',
    },
      
  ];

  app.use(morgan('common'));

// **Documentation static files are in /public/docs
  app.use(express.static("public"));


// **Getting home page with "Welcome!"
app.get('/', (req, res) => {
  // const req = {}
  // const res = {}
  res.send('Welcome!');
  // res = { 'Welcome!' }
});

// **Getting list of my top ten movies
app.get('/movies', (req, res) => {
  res.status(200).json(topMovies);
});


// **Return data about a single movie by title to user:
app.get("/movies/:title", (req, res) => {
res.json(topMovies.find((movie) => movie.title === req.params.title));
});


// **Return data about a genre by type:
app.get('/genre/:type', (req, res) => {
  res.json(topMovies.find((movie) => movie.genre === req.params.genre));
});


// **Return data about a director by name:
app.get('/directors/:director', (req, res) => {
  res.send('Successful GET request returning data about specific Director')
});

// **User Registration:
app.post('/users', (req, res) => {
//  create function for user registration
res.send('After complete send user information to notify completion')
});

// **Deregister user:
app.delete('/users/:id', (req, res) => {
  // create function to deregister user
 res.send('Create notification that user has been deregistered')
});

// **Change User First Name information:
app.put('/users/:id', (req, res) => {
  // Create function to change user first name
  res.send('Success notification returned to mark complete');
});

// **Change User's User Name:
app.put('/users/:id', (req, res) => {
  // Create function to change user's username
  res.send('Create notification showing new username has been created/changed')
});

// **Add Movie to favorites:
app.post('/users/:id/favorites/:movieTitle', (req, res) => {
//  Create function to add movie to favorites
res.send('Adding ____ Movie to favorites complete!')
});

// **Remove movie from favorites:
app.delete('/users/:id/favorites:movieTitle',(req, res) => {
  // Create function to delete movie from favorites
  res.send('movie successfully removed from favorites!')
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something is not working properly!');
});

  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });













