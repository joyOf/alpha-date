import mongoose from 'mongoose';

const dbUri = 'mongodb://localhost:27017/alphaDate';

const connectToDatabase = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('Already connected to database');
        return;
    }

    try {
        await mongoose.connect(dbUri);
        console.log('Mongoose default connection open to db');
    } catch (err) {
        console.error('Mongoose default connection error: ' + err);
    }

    mongoose.connection.on('error', (err: string) => {
        console.error('Mongoose runtime connection error: ' + err);
    });
};

export default connectToDatabase;