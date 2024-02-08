const express = require("express")
const jobmodel = require("../models/jobmodel")

const router = express.Router()

router.post("/job_entry",async(req,res)=>{
    let data = req.body
    let job = new jobmodel(data)
    let result = await job.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data = await jobmodel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input = req.body
    let data = await jobmodel.find(input)
    res.json(data)
})


module.exports = router

