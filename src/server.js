const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Cv = require('./cv');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Create a new CV
app.post('/cv', (req, res) => {
  const cv = new Cv(req.body);

  cv.save((error) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.status(201).send(cv);
  });
});

// Get all CVs
app.get('/cv', (req, res) => {
  Cv.find({}, (error, cvs) => {
    if (error) {
      return res.status(500).send(error);
    }

    return res.send(cvs);
  });
});

// Get a CV by ID
app.get('/cv/:id', (req, res) => {
  Cv.findById(req.params.id, (error, cv) => {
    if (error) {
      return res.status(500).send(error);
    }

    if (!cv) {
      return res.status(404).send({ message: 'CV not found' });
    }

    return res.send(cv);
  });
});

// Update a CV
app.put('/cv/:id', (req, res) => {
  Cv.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, cv) => {
    if (error) {
      return res.status(500).send(error);
    }

    if (!cv) {
      return res.status(404).send({ message: 'CV not found' });
    }

    return res.send(cv);
  });
});
