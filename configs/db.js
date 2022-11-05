const mongoose= require('mongoose');
require('dotenv').config();

const connection= mongoose.connect(`mongodb+srv://saif1:saif123@cluster0.qwtmycu.mongodb.net/backend?retryWrites=true&w=majority`);

module.exports= connection;