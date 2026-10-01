const express = require("express");
const app = express();
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago do Fogo", type: "Mago", attack: 6, defense: 3 },
  { name: "Cavaleiro das Sombras", type: "Criatura", attack: 5, defense: 6 },
  { name: "Cavaleiro carmesin", type: "Criatura", attack: 6, defense: 6 },
];
const items = cards.map(card => `<li>Name: ${card.name}/ type: ${card.type}/ attack:${card.attack}/ defense: ${card.defense}</li>`).join("");

app.get("/", (req, res) => {
  console.log(`${req.method} ${req.url}`);
    let contador = cards.length;

        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<h1>Página Inicial</h1>\n<h3>Apresentação - /sobre</h3>\n<h3>as " +  contador + " cartas - /cartas</h3>\n<h3>Data e hora atual - /agora</h3>\n<h3>Uma carta aleatória - /cartas/aleatoria</h3>");
});
app.get("/sobre", (req, res) => {
  console.log(`${req.method} ${req.url}`);

        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<h1>Afonso Santos TGPSI24T 17 anos</h1>");
});
app.get("/cartas", (req, res) => {
  console.log(`${req.method} ${req.url}`);

        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<ul>" + items + "</ul>");
});
app.get("/agora", (req, res) => {
  console.log(`${req.method} ${req.url}`);

        const now = new Date().toLocaleString("pt-PT");
        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end(now);
});
app.get("/cartas/aleatoria", (req, res) => {
  console.log(`${req.method} ${req.url}`);

        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        const card = cards[Math.floor(Math.random() * cards.length)];
        res.end("nome: " + card.name + " / tipo: " + card.type + " / ataque: " + card.attack + " / defesa: " + card.defense);
});

// sem caminho e NO FIM: apanha tudo o que sobrou
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(3000, () => console.log("http://localhost:3000"));