import express from "express";
import Joi from "joi";
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "krishna" },
  { id: 2, name: "BlueGuy" },
  { id: 3, name: "yellowguy" },
];

app.get("/", (req, res) => {
  res.send("hello Node");
});

app.get("/api/coustomers", (req, res) => {
  res.send([{ id: 1, name: "helo" }]);
});
app.get("/api/users" , (req , res)=>{
    res.send(users

    )
})

app.get("/api/coustomer/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) res.status(404).send("ID Not found");

  res.send(user);
});
app.get("/api/posts/:year/:month", (req, res) => {
  res.json({
    params: req.params,
    query: req.query,
  });
});

/// post

app.post("/api/customer", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  const name = req.body.name.trim();

  const user = {
    id: Date.now(),
    name,
  };

  users.push(user);
  res.status(201).json(user);
});
//// put

app.put("/api/customer/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) {
  return res.status(404).send("Id not Found");
}


  const { error } = validateUser(req.body);

  if (error) {
   return res.status(400).send(error.details[0].message);

  }

const name = req.body.name.trim();

  user.name = name;
  res.send(user);


});
function validateUser(user){
    const schema = Joi.object({
    name: Joi.string().trim().min(3).required()
  })

  return schema.validate(user);
}
// delete

app.delete("/api/customer/:id", (req, res) => {
  const user = users.find((c) => c.id === parseInt(req.params.id));
  if (!user) {
  return res.status(404).send("Id not Found");
  }

  const idex = users.indexOf(user);

  users.splice(idex , 1);


  res.send(users);
}
);

///
// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}....`);
});
