const express=require('express');
const workoutController = require("../../controllers/workoutcontroller");

const router=express.Router();
// router.get('/',(req,res)=>{
//     res.send("Get all workouts");
// });
// router.get('/:workoutId',(req,res)=>{
//     res.send("Get an existing workout");
// });
// router.post('/',(req,res)=>{
//     res.send("Create a new workout");
// });
// router.patch('/:workoutId',(req,res)=>{
//     res.send("Update an existing workout");
// });
// router.delete('/:workoutId',(req,res)=>{
//     res.send("Delete an existing workout");
// });
router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.CreateNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.DeleteOneWorkout);
module.exports=router;
