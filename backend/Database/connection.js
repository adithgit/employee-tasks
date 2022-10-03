const mongoose = require('mongoose');

// Connection to mongodb server
mongoose.connect('mongodb://127.0.0.1:27017/emp')
    .then(() => {
      console.log('Mongoose connected.');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });