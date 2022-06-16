const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://huudang284:01685134737dang@cluster0.yxl4h.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect Success!!!');

    } catch (error) {
        console.log('Connect Fail!!!');

    }
}

module.exports = { connect };
