const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    jobname:String,
    jobid:String,
    jobrole:String,
    jobsalary:String,
    jobduration:String
})

module.exports=mongoose.model("job_entry",jobSchema)