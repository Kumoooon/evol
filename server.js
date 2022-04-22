const client = require("./connection.js");
const express = require("express");
const app = express();
app.listen(3001, () => {
  console.log(`server is running on 3001`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
client.connect();
app.get("/crud", (req, res) => {
  client.query(`SELECT * FROM crud`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
  client.end;
});

app.post("/crud/create", (req, res) => {
  let insertQuery = `INSERT INTO public.crud (menu, kcal, fat, protein, ingredients)VALUES('${req.body.menu}','${req.body.kcal}','${req.body.fat}','${req.body.protein}','${req.body.ingredients}')`;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      console.log(req.body);
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.delete("/crud/:id", (req, res) => {
  let insertQuery = `DELETE FROM crud WHERE id=${req.params.id}`;
  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.put("/crud/:id", (req, res) => {
  //params로 id를 특정해서 업뎃한다.차후 수정
  const change = req.body;
  let updateQuery = `UPDATE crud
    set menu = '${change.menu}',
    kcal = '${change.kcal}',
    fat = '${change.fat}',
    protein = '${change.protein}',
    ingredients = '${change.ingredients}'
    WHERE id = ${req.params.id}`;
  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});
