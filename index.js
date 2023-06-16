const express = require('express')
const app = express()
const port = 3001

const USERS = [];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];
app.use(express.json());


const SUBMISSION = [

]

app.post('/signup', function(req, res) {


  // Add logic to decode body
  // body should have email and password


  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)

  const credentials= req.body;
  const user=credentials.email;
  const password=credentials.password;
  const UserExist=USERS.find(u=> u.email==user);
  if(UserExist){
    res.status(401).json({messages:'User Exists'});
  }
  else{
    USERS.push({user,password});
    res.status(200).json({ message: 'Login successful' });
  }
 
  
  // return back 200 status code to the client
  res.send('Hello World!')
})


app.post('/login', function(req, res) {
    const credentials= req.body;
    const email=credentials.email;
    const password=credentials.password;
    const username=USERS.find(user => user.email===email);
  if(username||username.password===password){
    res.status(200).json({message:"Login Successful"});
}
else{
    res.status(401).json({message:"Invalid"});
}
    });
  
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client



app.get('/questions', function(req, res) {
    res.send(QUESTIONS.map(q => q.title));

  //return the user all the questions in the QUESTIONS array
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
    const answer=req.body;
    SUBMISSION.push(answer);
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!");
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})