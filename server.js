// Imports
import minimist from 'minimist';
import express from 'express';
import { roll } from "./lib/roll.js";

// The app shall be express
const app = express()

// Require minimist module
const args = minimist(process.argv.slice(2));

app.use(express.urlencoded({extended: true}));

// Define a const `port` using the argument from the command line. 
// Make this const default to port 5000 if there is no argument given for `--port`.
let port = args.port
if (typeof(args.port) == "boolean") {
  port = 5000;
}

// define our variables for the default roll
var sides = 6;
var dice = 2;
var rolls = 1;


// Make endpoint at /app/ return "200 OK"
app.get('/app/', (req,res,next) => {
  res.send("200 OK")
  res.end
})

// Endpoint that returns the JSON for the default roll
app.get('/app/roll', (req,res,next) => {
  res.send(roll(sides, dice, rolls))
  res.end
})

app.get('/app/roll/:sides', (req,res,next) => {
  sides = parseInt(req.params.sides)
  res.send(roll(sides, dice, rolls))
  res.end
})

  app.get('/app/roll/:sides/:dice', (req,res,next) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice)
    res.send(roll(sides, dice, rolls))
    res.end
  })


  app.get('/app/roll/:sides/:dice/:rolls', (req,res,next) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice)
    rolls = parseInt(req.params.rolls)
    res.send(roll(sides, dice, rolls))
    res.end
  })

  app.get('/app/roll', (req,res,next) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice)
    rolls = parseInt(req.params.rolls)
    res.send(roll(sides, dice, rolls))
    res.end
  })

// 404 NOT FOUND
app.get("*", (req,res) => {
  res.status(404).send("404 NOT FOUND")
  res.end
})

 app.listen(port)
