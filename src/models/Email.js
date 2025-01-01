import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Email = mongoose.models.Email || mongoose.model('Email', emailSchema);
export default Email;