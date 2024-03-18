const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imagePost: {
        type: Buffer,
        required: false
    }
},{timestamps: true})

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
},{timestamps: false})

module.exports = {
    Workout: mongoose.model('Workout', workoutSchema),
    PostImage : mongoose.model('PostImage', postSchema)
}
