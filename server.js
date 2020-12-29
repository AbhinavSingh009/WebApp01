//const express = require('express'); common js way of doing it
import express from 'express'; // ES6 way of doing it.

const app = express();

app.use(express.static('public'));


console.log('Trying to see if the changes are going or not');