const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controller/workoutController')
const router = express.Router();

//get all workouts
router.get('/',getWorkouts);
//post a workout
router.post('/',createWorkout);
//get a single workout
router.get('/:id',getWorkout);
//router.delete();
//router.patch();
module.exports = router;