const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI =
  'mongodb+srv://dnagpal:dipen123@passwordmanager.cmwzfa1.mongodb.net/?retryWrites=true&w=majority';

// connect to my db
mongoose.connect(MONGO_URI, {
    // solves deprecated url parser issue: https://mongoosejs.com/docs/5.x/docs/deprecations.html#the-usenewurlparser-option
    useNewUrlParser: true,
    // timeout if the server can't connect within 30sec: https://mongoosejs.com/docs/5.x/docs/deprecations.html#useunifiedtopology
    useUnifiedTopology: true,
    // name the db that our collections are part of
    dbName: 'PaswordManager',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

//set a schema for username, password for each site

const passwordSchema = new Schema({
    website: String,
    username: String,
    password: String
});

const PasswordStorage = mongoose.model('password', passwordSchema);

module.exports = {
    PasswordStorage
}