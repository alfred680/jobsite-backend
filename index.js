require("dotenv").config()
const express=require("express")

const cors=require("cors")

require("./DBconnection")

const route=require("./route")

const jobserver=express()

jobserver.use(cors())
jobserver.use(express.json())
jobserver.use(route)

const PORT=process.env.PORT || 4000



jobserver.listen(PORT,()=>{
    console.log(`server is running ${PORT} `);
    
})