const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

//get workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//delete
const deleteWorkout = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.Objects.isValid(id)){
        return res.status(404).json({error: 'No such workout'});
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout){
        return res.status(404).json({error: 'No such workout'});
    }
    res.status(200).json(workout);    
}
/** 
 * the idea behind this is that when we input the id of the workout to be deleted we are first checking if the id is valid
 * if the id is not valid then there is a chance of the server crashing which we have to avoid
 * that is why we use the function mongoose.Type.Objects.isValid() to check if the the id inputted is a valid id
 * if not then we try to delete the workout by calling the function findOneAndDelete() of Workout object passing the id
 * this fucntion returns the workout to be deleted and the actual workout is deleted from the database
 * once again here comes the issue where the id passed is valid but there is no data in the specified id
 * thus here we store the result of the function into workout variable and check if the workout variable is null or not
 * if workout variable is null then it means that there was no data with the specified id
 * thus here we once again send the response that there is no such workout
 * else we just display the workout that was deleted which is not really necessary
*/

//get single
const getWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'});
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//create
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body
    //add doc to db
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//update
const updateWorkout = async (req,res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'});
    }
    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'No such workout'});
    }
    res.status(200).json(workout);
}

// get id
// check if id is valid
// const workout = await Workout.findOneAndUpdate({_id:id}, {
//     ...req.body
// })

// if workout does not exist then say no such workout 
// else res.status"" "" ""


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}