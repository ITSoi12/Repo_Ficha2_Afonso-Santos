export const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Mago do Fogo", type: "Mago", attack: 6, defense: 3 },
  { name: "Cavaleiro das Sombras", type: "Criatura", attack: 5, defense: 6 },
  { name: "Cavaleiro carmesin", type: "Criatura", attack: 6, defense: 6 },
];

export default function CardList() {
  return (
    <main>
      <h1>A minha coleção</h1>
      <>
        <h2>Tenho {cards.length} cartas</h2>

        {cards.map((card, index) => (
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
    </main>
  );
}