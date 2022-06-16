const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://huudang2842:!23456@cluster0.aaxpe.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect Success!!!');

    } catch (error) {
        cosole.log(error);
        console.log('Connect Fail!!!');

    }
}

module.exports = { connect };
