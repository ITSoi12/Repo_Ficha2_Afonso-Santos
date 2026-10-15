import { useState } from "react";
export const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago do Fogo", type: "Mago", attack: 6, defense: 3 },
  { name: "Cavaleiro das Sombras", type: "Criatura", attack: 5, defense: 6 },
  { name: "Cavaleiro carmesin", type: "Criatura", attack: 6, defense: 6 },
];

export default function CardList() {
  const [pesquisa, setPesquisa] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [cartaAleatoria, setCartaAleatoria] = useState(null);

  const cartasFiltradas =
    filtro === "Criatura"
      ? cards.filter((card) => card.type === "Criatura")
      : cards;

  const cartasPesquisadas = cartasFiltradas.filter((card) =>
    card.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <main>
      <h1>A minha coleção</h1>
      <input
        type="text"
        placeholder="Procurar carta por nome"
        value={pesquisa}
        onChange={(e) => {
          setPesquisa(e.target.value);
          setCartaAleatoria(null);
        }}
      />
      <h1></h1>
      <button
        onClick={() => {
          setCartaAleatoria(null);
          setFiltro("todos");
        }}
      >
        Filtrar todas as cartas
      </button>
      <button
        onClick={() => {
          setCartaAleatoria(null);
          setFiltro("Criatura");
        }}
      >
        Filtrar cartas de criatura
      </button>
      <button
        onClick={() => {
          if (cartasPesquisadas.length > 0) {
            const indice = Math.floor(Math.random() * cartasPesquisadas.length);
            setCartaAleatoria(cartasPesquisadas[indice]);
          }
        }}
      >
        Carta á sorte
      </button>
      {cartaAleatoria ? (
        <section>
          <h2>Carta sorteada</h2>
          <h3>{cartaAleatoria.name}</h3>
          <p>Tipo: {cartaAleatoria.type}</p>
          <p>Ataque: {cartaAleatoria.attack}</p>
          <p>Defesa: {cartaAleatoria.defense}</p>

          {cartaAleatoria.attack >= 6 && (
            <p><strong>Carta forte</strong></p>
          )}
        </section>
      ) : (
        <>
          <h2>Tenho {cartasPesquisadas.length} cartas</h2>

          {cartasPesquisadas.map((card, index) => (
            <div key={index}>
              <h3>{card.name}</h3>
              <p>Tipo: {card.type}</p>
              <p>Ataque: {card.attack}</p>
              <p>Defesa: {card.defense}</p>

              {card.attack >= 6 && (
                <p><strong>Carta forte</strong></p>
              )}
            </div>
          ))}
        </>
      )}
    </main>
  );
}