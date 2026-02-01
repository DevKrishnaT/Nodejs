import http from "http";


const server = http.createServer((req , res)=>{
   


    if(req.url == "/"){
        res.write("You are in home screen");
        
    }else if(req.url == "/product"){
        res.write("you are in product secation");
        
    }else{
        res.write("nothing here");
        
    }
     res.end();
   
})


server.listen(2000 , () =>{
    console.log("created");
    
})