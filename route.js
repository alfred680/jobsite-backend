const express=require("express")
const jobcountroller=require("./controller")

const route=new express.Router()

route.post("/addjob",jobcountroller.addJob)
route.get("/getjob",jobcountroller.getAllJobs)
route.get("/fliterjob",jobcountroller.getAll)

module.exports=route