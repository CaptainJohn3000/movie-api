// Import Express (which sets up a web server)
const express = require('express');

 morgan = require('morgan');
 uuid = require('uuid');

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

  let users = [
    {
      userName: 'tfree3',
      firstName: 'Tanner',
      lastName: 'Free',
      password: 'password',
      email: 'hell@email.com',
      birthDate: '03-04-1992',
      id: '1'
    },
  ];

// **Documentation static files are in /public/docs
  server.use("/docs", express.static("public/docs"));

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
app.get('/movies/:title', (req, res) => {
  res.json(topMovies.find((movie) => topMovies.title === req.params.title));
});


// **Return data about a genre by type:
app.get('/genre/:type', (req, res) => {
  const returnedGenre = topMovies.find(req.genre);
  res.json(returnedGenre);
});


// **Return data about a director by name:
app.get('/directors/:director', (req, res) => {
  const returnedDirector = topMovies.find(req.director);
  res.json(returnedDirector);
});

// **User Registration:
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (!newUser.name) {
    const message = 'Please include your name!';
    res.status(400).send(message);
  } else {
    newStudent.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// **Deregister user:
app.delete('/users/:id', (req, res) => {
  const = deregisterUser = users.find((user) => user.id === req.params.id);
  // ******ADD DEREGISTER FUNCTION******
  if (deregisterUser) {
    res.status(201).send('Success, goodbye!');
  } else {
    res.status(400).send('Please use correct user id!');
  }
};

// **Change User First Name information:
app.put('/users/:id', (req, res) => {
  const = changeUser = users.find((user) => user.id === req.params.id);
  if (changeUser && req.body.firstName) {
    changeUser.firstName = req.body.firstName;
    res.status(201).send('Success!');
    else {
      res.status(400).send('Failure - please see documentation!');
    }
  }
});

// **Change User's User Name:
app.put('/users/:id', (req, res) => {
  const = changeUser = users.find((user) => user.id === req.params.id);
  if (changeUser && req.body.userName) {
    changeUser.userName = req.body.userName;
    res.status(201).send('Success!');
  } else {
      res.status(400).send('Failure - please see documentation!');
    };
});

// **Add Movie to favorites:
app.post('/users/:id/favorites/:movieTitle', (req, res) => {
  const validMovie = topMovies.find((movie) => movie.title === req.params.movieTitle);
// ******ADD FUNCTION HERE******
  if (validMovie) {
    res.status(201).send('Success!');
  } else {
    res.status(400).send('Please use correct movie title!');
  }
});

// **Remove movie from favorites:
app.delete('/users/:id/favorites:movieTitle',(req, res) => {
  const validMovie = topMovies.find((movie) => movie.title === req.params.movieTitle);
  // ******ADD FUNCTION HERE******
if (validMovie) {
  res.status(201).send('Success!');
} else {
  res.status(400).send('Please use correct movie title!');
}
});







  app.use((err, req, res, next) => {
    console.error(err.stack);
    }
    res.status(500).send('Something is not working properly, please check!');
  });

  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });




// req = googleServer.johnnysServer.com:8080/movies








