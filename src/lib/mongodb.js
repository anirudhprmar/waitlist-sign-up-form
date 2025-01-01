import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return true;
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};

export default connectDB;