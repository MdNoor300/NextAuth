import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"please enter a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true,"please enter an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true,"please enter a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})
const User =mongoose.models.User || mongoose.model('users', userSchema);
export default users;