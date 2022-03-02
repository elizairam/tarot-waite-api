const express = require("express");
const app = express();
const cors = require("cors");
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  app.use(cors());
  next();
});

app.get("/", (req, res) => {
  res.send("* API Cartas do tarot Rider-Waite Smith *");
});

app.get("/cartas", (req, res) => {
  const data = importData.cartas.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
  res.send(data);
});

app.get("/cartas/id/:id", (req, res) => {
  const { id } = req.params;
  res.send(importData.cartas[id]);
});

app.get("/cartas/jogo/sortear/:sortear", (req, res) => {
  const { sortear } = req.params;
  const embaralhar = importData.cartas.sort(() => Math.random() - 0.5);
  const cartas_sorteadas = embaralhar.slice(0, sortear);
  res.send(cartas_sorteadas);
});

app.get("/cartas/jogo/sortear/5/cruz-verdade", (req, res) => {
  const embaralhar = importData.cartas.sort(() => Math.random() - 0.5);
  const cartas_sorteadas = embaralhar.slice(0, 5);
  res.send(cartas_sorteadas);
});

app.get("/cartas/jogo/sortear/9/nove-cartas", (req, res) => {
  const embaralhar = importData.cartas.sort(() => Math.random() - 0.5);
  const cartas_sorteadas = embaralhar.slice(0, 9);
  res.send(cartas_sorteadas);
});

app.get("/cartas/jogo/sortear/10/cruz-celta", (req, res) => {
  const embaralhar = importData.cartas.sort(() => Math.random() - 0.5);
  const cartas_sorteadas = embaralhar.slice(0, 10);
  res.send(cartas_sorteadas);
});

app.get("/cartas/jogo/sortear/7/ancora", (req, res) => {
  const arcano_maior = importData.cartas.filter(
    (el) => el.tipo === "Arcano maior"
  );
  const embaralhar = arcano_maior.sort(() => Math.random() - 0.5);
  const cartas_sorteadas = embaralhar.slice(0, 7);
  res.send(cartas_sorteadas);
});

app.get("/cartas/jogo/sortear/21/vida", (req, res) => {
  const embaralhar = importData.cartas.sort(() => Math.random() - 0.5);
  const cartas_sorteadas = embaralhar.slice(0, 21);
  res.send(cartas_sorteadas);
});

app.get("/cartas/tipo/arcano-maior", (req, res) => {
  const arcano_maior = importData.cartas
    .filter((el) => el.tipo === "Arcano maior")
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  res.send(arcano_maior);
});

app.get("/cartas/tipo/arcano-menor", (req, res) => {
  const arcano_menor = importData.cartas
    .filter((el) => el.tipo === "Arcano menor")
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  res.send(arcano_menor);
});

app.get("/cartas/valor/paus", (req, res) => {
  const pausData = importData.cartas
    .filter((el) => el.valor === "Paus")
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  res.send(pausData);
});

app.get("/cartas/valor/copas", (req, res) => {
  const copasData = importData.cartas
    .filter((el) => el.valor === "Copas")
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  res.send(copasData);
});

app.get("/cartas/valor/espadas", (req, res) => {
  const espadasData = importData.cartas
    .filter((el) => el.valor === "Espadas")
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  res.send(espadasData);
});

app.get("/cartas/valor/ouros", (req, res) => {
  const ourosData = importData.cartas
    .filter((el) => el.valor === "Ouros")
    .sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  res.send(ourosData);
});

app.listen(port, () => {
  console.log(`Servidor na porta http://localhost:${port} o/`);
});
