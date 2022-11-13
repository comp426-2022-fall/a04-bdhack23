// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);

// Imports
import minimist from 'minimist';
import express from 'express';
import { roll } from "./lib/roll.js";

// Require express module
// const http = require('express');

// The app shall be express
const app = express()

// Require minimist module
const args = ('minimist')(process.argv.slice(2));

// Define a const `port` using the argument from the command line. 
// Make this const default to port 5000 if there is no argument given for `--port`.
const port = args.port || process.env.PORT || 5000;

// define our constants for the default roll
const sides = 6;
const dice = 2;
const rolls = 1;


// Make endpoint at /app/ return "200 OK"
app.get('/app/', (req,res,next) => {
  res.status(200).send("200 OK").end()
})

// Endpoint that returns the JSON for the default roll
app.post('/app/roll/:sides', (req,res,next) => {
  sides = parseInt(req.params.sides)
  res.status("200").roll(sides,dice,rolls)
})

  app.post('/app/roll/:sides/:dice', (req,res,next) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice)
    res.status("200").roll(sides,dice,rolls)
  })


  app.post('/app/roll/:sides/:dice', (req,res,next) => {
    sides = parseInt(req.params.sides)
    dice = parseInt(req.params.dice)
    rolls = parseInt(req.params.rolls)
    res.status("200").roll(sides,dice,rolls)
  })
