import express from "express";
import { con } from "./database.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  con.query("SELECT * FROM text2", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/get", (req, res) => {
  con.query("SELECT * FROM history", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/:id", (req, res) => {
  let id =req.params.id
  con.query("SELECT * FROM text2 where id = ?",[id],(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/post", (req, res) => {
  let titulo = req.body.titulo2;
  let texto = req.body.text2;
  console.log(texto);
  con.query(
    `INSERT INTO text2 (titulo2,text2) VALUES (?,?)`,
    [titulo, texto],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("post completado ");
      }
    }
  );
  con.query(
    `INSERT INTO history (title,text) VALUES (?,?)`,
    [titulo, texto],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("history completado ");
      }
    }
  );
});

app.delete("/delete",  function (req, res) {
  let id = req.body.id;
  console.log(id);
  con.query("delete FROM text2 where id=?", [id], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("eliminado", res.affectedRows);
    }
  });
});

app.put("/edit", (req, res) => {
  let titulo = req.body.titulo2;
  let texto = req.body.text2;
  let id = req.body.id;
  con.query("update text2 set titulo2 = ?,text2 = ? where id = ?",
    [titulo, texto, id],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("editado", res.affectedRows);
      }
    }
  );
});


app.listen(process.env.PORT || 3001, () => {
  console.log("App is listening ");
});