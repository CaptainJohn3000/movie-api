const express = require('express');
morgan = require('morgan');

const app = express();

//middleware logging
app.use(morgan('common'));

//for sening static public files (documentation)
app.use(express.static('public'));


//array of objects of my top ten movies
let MyTopTenMovies = [
    {
        title: 'The Terminal', 
        director: 'Steven Spielberg'
    },
    {
        title: 'Ready Player One', 
        director: 'Steven Spielberg'
    },
    {
        title: 'The Sum Of All Fears',
        director: 'Phil Alden Robinson'
      },
      {
        title: 'The Lord Of The Rings: The Fellowship Of The Ring',
        director: 'Peter Jackson'
      },
      {
          title: 'Saving Private Ryan', 
          director: 'Steven Spielberg'
      },
      {
        title: 'The Replacements', 
        director: 'Howard Deutch'
    },
    {
        title: 'Passengers', 
        director: 'Morten Tyldum'
    },
    {
        title: 'The Last Samurai', 
        director: 'Edward Zwick'
    },
    {
        title: 'Indiana Jones And The Raiders Of The Lost Ark', 
        director: 'Steven Spielberg'
    },
    {
        title: 'Rush', 
        director: 'Ron Howard'
    },
      
  ];

  //returning my top ten 
app.get('/movies', (req, res) => {
    res.json(MyTopTenMovies);
  });

  app.get('/', (req, res) => {
    res.send('Welcome!');
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is not working properly, please check!');
  });

  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });