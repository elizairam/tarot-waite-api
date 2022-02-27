const express = require("express")
const app = express()
const importData = require('./data.json')
let port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Cartas do tarot rider waite smith")
})

app.get("/cartas", (req, res) => {
  res.send(importData)
})

app.get("/cartas/id/:id", (req, res) => {
  const { id }  = req.params
  res.send(importData.cartas[id])
})

app.get("/cartas/tipo/arcano-maior", (req, res) => {
  const arcano_maior = importData.cartas.slice(0,22)
  res.send(arcano_maior)
})

app.get("/cartas/valor/paus", (req, res) => {
  const pausData = importData.cartas.slice(22,36)
  res.send(pausData)
})

app.get("/cartas/valor/copas", (req, res) => {
  const copasData = importData.cartas.slice(36,50)
  res.send(copasData)
})

app.get("/cartas/valor/espadas", (req, res) => {
  const espadasData = importData.cartas.slice(50,65)
  res.send(espadasData)
})

app.get("/cartas/valor/ouros", (req, res) => {
  const ourosData = importData.cartas.slice(65,79)
  res.send(ourosData)
})

app.listen(port, () => {
   console.log(`Servidor na porta http://localhost:${port} o/`)
})