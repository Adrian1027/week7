//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const actors = require('./routers/actors');
const movies = require('./routers/movie');

const app = express();

app.listen(8080);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');

});

//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);// tim ,John,Paul,Harden,Nicola,Boyle,Leo
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
// harry potter:Tim John//
// mission impossible:John
// Avengers: Harden, (((D1)))
// Iron Man ,leo,Harden
// John Wick:Tim,leo


app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/delete2/:id',actors.delete2);//delete actor and its movie deleted tim
app.delete('/actors/delete3/:aid/:mid',actors.delete3);//delete 
app.get('/actors/:year1/:year2',actors.getYear6);// get year range movies


//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);// harry potter,mission impossible, Avengers, Black Panther,Iron MAn, John Wick
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.delete('/movies/:id',movies.deleteByID1);// del by id(movie) tried
app.delete('/movies/delete4/:mid/:aid',movies.delete4);//delete
app.post('/movies/actors/:id', movies.addActor5); 
app.delete('/movies/delete9',movies.deleteYear9);// del by year range