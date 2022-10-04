const mongoose = require('mongoose');

// Connection to mongodb server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Mongoose connected.');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });