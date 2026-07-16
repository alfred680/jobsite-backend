const mongoouse=require("mongoose")
const ConnentionString=process.env.DATABASE

mongoouse.connect(ConnentionString).then(()=>{
    console.log("server database connected");
    
}).catch((err)=>{
    console.log("server database failed");
    

})