const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const con = require('./connection')
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
con.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
    con.query(`SELECT * FROM phonedata`,(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
  });

// Sample route to handle fetching data
// app.get('/formData', (req, res) => {
//     // Fetch data from MySQL database
//     con.query(`SELECT * FROM phonedata`, (err, results) => {
//       if (err) {
//         console.error('Error fetching data from database:', err);
//         res.status(500).send('Error fetching data from database');
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   });

  // Routes
// Sample route to handle form submissions
app.post('/api/form', (req, res) => {
    const {  name, countryCode, phoneNumber } = req.body;
    
    console.log(name);
    // Perform validation checks here
    
    // Insert into MySQL database
    // const sql = `INSERT INTO phonedata ( name, code, phno) VALUES ( ?, ?, ?)`;
    con.query(sql, [ name, countryCode, phoneNumber], (err, result) => {
        if (err) {
          console.error('Error inserting data into database:', err);
          res.status(500).send('Error inserting data into database');
        } else {
          res.status(200).send('Form data inserted successfully');
        }
      });
  });



  // Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });