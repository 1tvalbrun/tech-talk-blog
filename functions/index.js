const functions = require('firebase-functions');
const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser');

// App Config
const blogRoutes = require('./routes/blogs');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(blogRoutes);

// Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Mongoose Config
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

// Connect to Mongo
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

// app.get('/timestamp', (req, res) => {
//   res.send(`${Date.now()}`);
// });

// app.get('/timestamp-cached', (req, res) => {
//   res.set('Cache-control', 'public, max-age=300, s-maxage=600');
//   res.send(`${Date.now()}`);
// });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);
300;
