const express=require('express');

//const v1Router=require('./v1/routes');
const v1WorkoutRouter=require('./v1/routes/workoutroutes')
const app=express();
const PORT=process.env.port || 3000;

//app.use("/api/v1", v1Router);

// app.get('/',(req,res)=>{
//     res.send("<h2> Hello it's working</h2>")
// });
app.use("/api/v1/workouts",v1WorkoutRouter)
app.listen(PORT,()=>{
    console.log(`API is listening on port ${ PORT}`)
});