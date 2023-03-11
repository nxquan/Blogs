const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education');
        console.log('Connect to db successfully');
    } catch (error) {
        console.log('Connect to db fail!');
    }
}

module.exports = { connect };
