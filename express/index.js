import express from "express";

const app = express();
const checkAuth = (req, res, next) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return res.status(401).send("Not logged in");
  }

  next();
};
app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Welcome to dashboard");
});
app.use((req, res, next) => {
  console.log("Middleware executed");
  console.log(req.method , req.url);
  
  next();
});

app.use((req , res , next)=>{
    req.user = {name: "krishn" , role: "admin"}
    next();
})

app.get("/profile", (req, res) => {
  res.redirect("/")
 
});


app.get('/', (req, res) => {
  res.send('Hello Express!');
});


app.get('/user/:id' , (req , res) =>{
    console.log(req.body);
    res.send("users id")
    
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT} `);
});