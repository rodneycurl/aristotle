const express = require('express');
const hello = require('./hello.js');

const app = express();

app.get('/hello/:name', hello);

app.listen(3000, (error) => {
  if (error) {
  console.log('error happened!!!!');
  console.log(error);
  process.exit(1); // <-- kills the node process
}
  console.log('Server is running on port 3000!');
});

// REST
// ---

// GET /resource                  -- list all resources
// GET /cats                      -- Get all of the cats in the system

// POST /resource                 -- Create a new resource
// POST /cats                     -- Create a new cat in the system

// Swap out the entire record
// PUT /resource/:id              -- Update an existing resource
// PUT /cats/32                   -- Update the cat with the ID of 32

// DELETE /resource/:id           -- Update an existing resource
// DELETE /cats/32                -- Update the cat with the ID of 32

// app.get('/cats', (request, response) => {});    //list all
// app.post('/cats', (request, response) => {});   // create new
// app.get('/cats', (request, response) => {});    // get specific cat
// app.put('/cats', (request, response) => {});    // update specific cat
// app.delete('/cats', (request, response) => {}); // delete specific cat

// api has 100,000+ lines of code
// store functions in different folder vs the actual route declaration file
