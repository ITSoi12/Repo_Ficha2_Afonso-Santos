const http = require("http");

const PORT = 3000;
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago do Fogo", type: "Mago", attack: 6, defense: 3 },
  { name: "Cavaleiro das Sombras", type: "Criatura", attack: 5, defense: 6 },
  { name: "Cavaleiro carmesin", type: "Criatura", attack: 6, defense: 6 },
];
const items = cards.map(card => `<li>Name: ${card.name}/ type: ${card.type}/ attack:${card.attack}/ defense: ${card.defense}</li>`).join("");


const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
    let contador = cards.length;

    if (req.url === "/") {
        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<h1>Página Inicial</h1>\n<h3>Apresentação - /sobre</h3>\n<h3>as " +  contador + " cartas - /cartas</h3>\n<h3>Data e hora atual - /agora</h3>\n<h3>Uma carta aleatória - /cartas/aleatoria</h3>");
}
    else if (req.url === "/sobre") {
        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<h1>Afonso Santos TGPSI24T 17 anos</h1>");
}
    else if (req.url === "/cartas") {
        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<ul>" + items + "</ul>");

}
    else if (req.url === "/agora") {
        const now = new Date().toLocaleString("pt-PT");
        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        res.end(now);

}
    else if (req.url === "/cartas/aleatoria") {
        res.writeHeader(200, {"Content-Type": "text/html; charset=UTF-8"});
        const card = cards[Math.floor(Math.random() * cards.length)];
        res.end("nome: " + card.name + " / tipo: " + card.type + " / ataque: " + card.attack + " / defesa: " + card.defense);


}
    else {
        res.writeHeader(404, {"Content-Type": "text/html; charset=UTF-8"});
        res.end("<h1>ERRO 404\n</h1>");
}
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});