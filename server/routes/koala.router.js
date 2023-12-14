const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "koalas" ORDER BY "id"`
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting koalas', error);
      res.sendStatus(500);
    });
  });
  

// POST
 router.post('/',  (req, res) => {
    let newKoala = req.body;
    console.log(`Adding newKoala`, newKoala);
  
    let queryText = `INSERT INTO "koalas" ("name", "gender", "age", "transferReady", "notes")
    VALUES 
    ($1, $2, $3, $4, $5);`
    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.transferReady, newKoala.notes])
      .then(result => {
        console.log(newKoala)
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding newKoala`, error);
        res.sendStatus(500);
      });
  }); 

// PUT
 router.put('/:id', (req, res) => {
    let koalaId = req.params.id;
    let transferReady = req.body.transferReady;
    let queryText = `UPDATE "koalas" SET "transferReady" = True WHERE "id" = $1;`;
    pool.query(queryText,[koalaId])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        console.log(`Error updating book read status`, error);
        res.sendStatus(500);
      });
  }); 

// DELETE
router.delete('/:id', (req, res) => {
  console.log("running")
  let koalaId = req.params.id;

  const queryText = `DELETE FROM "koalas" WHERE "id" = $1;`
  const queryParams = [koalaId];

  pool.query(queryText, queryParams)
      .then(() => {
          console.log("Koala Deleted")
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log("Error in DELETE query: ", queryText, error);
          res.sendStatus(500);
      });
});

module.exports = router;