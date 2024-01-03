// Define the data structure for pairings
interface Pairing {
  jugador1: string;
  jugador2: string;
  puntos1: number;
  puntos2: number;
}

// Function to calculate points based on multiple jornadas
function calculatePoints(jornadas: Pairing[][]): any {
  // Hardcoded player names and factions
  const playerFactions: { [player: string]: string } = {
    'JOSEMA': 'SCOUTS',
    'FERNANDO': 'KARSKINS', 
    'KRYS': 'BLOODED',
    'JESÚS': 'ARBITRES', 
    'JUANJO': 'CULTO DEL CAOS', 
    'JUDIT': 'DRUKHARI',
    'LUCAS': 'PATHFINDER', 
    'LUISMI': 'KARSKINS', 
    'RAFA M': 'PATHFINDER',
    'RAFA E': 'ELUCIDIAN', 
    'JAVI': 'GUARDIA VETERANA', 
    'MIGUEL': 'PATHFINDER',
    'PEDRO': 'INTERCESORES', 
    'IVÁN': 'GUARDIA VETERANA', 
    'ANTONIO': 'LEGIONARIOS',
    'ALFONSO': 'LEGIONARIOS'
  };

  // Initialize the players' data
  const playerData: any = {};
  for (const player of Object.keys(playerFactions)) {
    playerData[player] = { nombre: player, faccion: playerFactions[player], jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 };
  }

  // Iterate through each jornada to calculate points
  jornadas.forEach(pairings => {
    pairings.forEach(pairing => {
      const { jugador1, jugador2, puntos1, puntos2 } = pairing;

      // Exclude games with a result of 0-0
      if (puntos1 !== 0 || puntos2 !== 0) {
        // Update player data
        playerData[jugador1].jugadas += 1;
        playerData[jugador2].jugadas += 1;

        if (puntos1 > puntos2) {
          playerData[jugador1].victorias += 1;
          playerData[jugador1].puntos += puntos1;
          playerData[jugador2].derrotas += 1;
          playerData[jugador2].puntos += puntos2;
        } else if (puntos1 < puntos2) {
          playerData[jugador2].victorias += 1;
          playerData[jugador2].puntos += puntos2;
          playerData[jugador1].derrotas += 1;
          playerData[jugador1].puntos += puntos1;
        } else {
          playerData[jugador1].empates += 1;
          playerData[jugador1].puntos += puntos1;
          playerData[jugador2].empates += 1;
          playerData[jugador2].puntos += puntos2;
        }
      }
    });
  });

  // Convert playerData object to array
  const result = Object.values(playerData);

  // Sort the array based on points and other criteria
  result.sort((a: any, b: any) => b.puntos - a.puntos || b.victorias - a.victorias);

  return result;
}

const jornada1 = [
  { jugador1: 'JOSEMA', jugador2: 'FERNANDO', puntos1: 15, puntos2: 18 },
  { jugador1: 'KRYS', jugador2: 'JESÚS', puntos1: 18, puntos2: 12 },
  { jugador1: 'JUANJO', jugador2: 'JUDIT', puntos1: 21, puntos2: 11 },
  { jugador1: 'LUCAS', jugador2: 'LUISMI', puntos1: 17, puntos2: 13 },
  { jugador1: 'RAFA M', jugador2: 'ANTONIO', puntos1: 18, puntos2: 11 },
  { jugador1: 'ALFONSO', jugador2: 'RAFA E', puntos1: 10, puntos2: 14 },
  { jugador1: 'JAVI', jugador2: 'MIGUEL', puntos1: 18, puntos2: 11 },
  { jugador1: 'PEDRO', jugador2: 'IVÁN', puntos1: 18, puntos2: 9 },
];

const jornada2 = [
  { jugador1: 'JOSEMA', jugador2: 'KRYS', puntos1: 16, puntos2: 17 },
  { jugador1: 'FERNANDO', jugador2: 'JESÚS', puntos1: 16, puntos2: 14 },
  { jugador1: 'JUANJO', jugador2: 'LUCAS', puntos1: 9, puntos2: 21 },
  { jugador1: 'JUDIT', jugador2: 'RAFA M', puntos1: 15, puntos2: 15 },
  { jugador1: 'LUISMI', jugador2: 'ALFONSO', puntos1: 6, puntos2: 21 },
  { jugador1: 'ANTONIO', jugador2: 'JAVI', puntos1: 13, puntos2: 18 },
  { jugador1: 'RAFA E', jugador2: 'PEDRO', puntos1: 18, puntos2: 14 },
  { jugador1: 'MIGUEL', jugador2: 'IVÁN', puntos1: 17, puntos2: 12 },
];

const jornada3 = [
  { jugador1: 'JOSEMA', jugador2: 'JUANJO', puntos1: 0, puntos2: 0 },
  { jugador1: 'KRYS', jugador2: 'LUCAS', puntos1: 13, puntos2: 19 },
  { jugador1: 'FERNANDO', jugador2: 'JUDIT', puntos1: 16, puntos2: 12 },
  { jugador1: 'JESÚS', jugador2: 'LUISMI', puntos1: 12, puntos2: 9 },
  { jugador1: 'RAFA M', jugador2: 'RAFA E', puntos1: 20, puntos2: 11 },
  { jugador1: 'ANTONIO', jugador2: 'PEDRO', puntos1: 0, puntos2: 0 },
  { jugador1: 'ALFONSO', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0 },
  { jugador1: 'JAVI', jugador2: 'IVÁN', puntos1: 20, puntos2: 9 },
];

const jornada4 = [
  { jugador1: 'JOSEMA', jugador2: 'ANTONIO', puntos1: 0, puntos2: 0 },
  { jugador1: 'JUDIT', jugador2: 'JAVI', puntos1: 0, puntos2: 0 },
  { jugador1: 'JUANJO', jugador2: 'LUISMI', puntos1: 0, puntos2: 0 },
  { jugador1: 'KRYS', jugador2: 'RAFA E', puntos1: 16, puntos2: 10 },
  { jugador1: 'LUCAS', jugador2: 'PEDRO', puntos1: 19, puntos2: 9 },
  { jugador1: 'FERNANDO', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0 },
  { jugador1: 'JESÚS', jugador2: 'IVÁN', puntos1: 0, puntos2: 0 },
  { jugador1: 'RAFA M', jugador2: 'ALFONSO', puntos1: 0, puntos2: 0 },
];

const jornada5 = [
  { jugador1: 'JOSEMA', jugador2: 'LUCAS', puntos1: 17, puntos2: 13 },
  { jugador1: 'JUDIT', jugador2: 'PEDRO', puntos1: 0, puntos2: 0 },
  { jugador1: 'JUANJO', jugador2: 'RAFA E', puntos1: 0, puntos2: 0 },
  { jugador1: 'LUISMI', jugador2: 'RAFA M', puntos1: 0, puntos2: 0 },
  { jugador1: 'KRYS', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0 },
  { jugador1: 'FERNANDO', jugador2: 'IVÁN', puntos1: 0, puntos2: 0 },
  { jugador1: 'JESÚS', jugador2: 'JAVI', puntos1: 19, puntos2: 11 },
  { jugador1: 'ALFONSO', jugador2: 'ANTONIO', puntos1: 0, puntos2: 0 },
];

const jornada6 = [
  { jugador1: 'JOSEMA', jugador2: 'LUISMI', puntos1: 19, puntos2: 13 },
  { jugador1: 'LUCAS', jugador2: 'JUDIT', puntos1: 0, puntos2: 0 },
  { jugador1: 'RAFA M', jugador2: 'PEDRO', puntos1: 17, puntos2: 16 },
  { jugador1: 'JUANJO', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0 },
  { jugador1: 'KRYS', jugador2: 'IVÁN', puntos1: 0, puntos2: 0 },
  { jugador1: 'FERNANDO', jugador2: 'JAVI', puntos1: 16, puntos2: 14 },
  { jugador1: 'JESÚS', jugador2: 'ALFONSO', puntos1: 9, puntos2: 16 },
  { jugador1: 'RAFA E', jugador2: 'ANTONIO', puntos1: 0, puntos2: 0 },
];

const jornada7 = [
  { jugador1: 'JOSEMA', jugador2: 'RAFA E', puntos1: 0, puntos2: 0 },
  { jugador1: 'FERNANDO', jugador2: 'KRYS', puntos1: 0, puntos2: 0 },
  { jugador1: 'JUANJO', jugador2: 'JESÚS', puntos1: 0, puntos2: 0 },
  { jugador1: 'JUDIT', jugador2: 'LUISMI', puntos1: 0, puntos2: 0 },
  { jugador1: 'LUCAS', jugador2: 'JAVI', puntos1: 0, puntos2: 0 },
  { jugador1: 'RAFA M', jugador2: 'IVÁN', puntos1: 0, puntos2: 0 },
  { jugador1: 'ANTONIO', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0 },
  { jugador1: 'PEDRO', jugador2: 'ALFONSO', puntos1: 0, puntos2: 0 },
];

const jornada8 = [
  { jugador1: 'JOSEMA', jugador2: 'JUDIT', puntos1: 0, puntos2: 0 },
  { jugador1: 'FERNANDO', jugador2: 'JUANJO', puntos1: 0, puntos2: 0 },
  { jugador1: 'IVÁN', jugador2: 'ALFONSO', puntos1: 0, puntos2: 0 },
  { jugador1: 'KRYS', jugador2: 'JAVI', puntos1: 0, puntos2: 0 },
  { jugador1: 'JESÚS', jugador2: 'RAFA E', puntos1: 0, puntos2: 0 },
  { jugador1: 'LUCAS', jugador2: 'RAFA M', puntos1: 0, puntos2: 0 },
  { jugador1: 'ANTONIO', jugador2: 'LUISMI', puntos1: 0, puntos2: 0 },
  { jugador1: 'PEDRO', jugador2: 'MIGUEL', puntos1: 0, puntos2: 0 },
];

const jornada9 = [
  { jugador1: 'JOSEMA', jugador2: 'JESÚS', puntos1: 0, puntos2: 0 },
  { jugador1: 'FERNANDO', jugador2: 'RAFA M', puntos1: 0, puntos2: 0 },
  { jugador1: 'RAFA E', jugador2: 'JAVI', puntos1: 0, puntos2: 0 },
  { jugador1: 'JUANJO', jugador2: 'KRYS', puntos1: 0, puntos2: 0 },
  { jugador1: 'LUCAS', jugador2: 'ALFONSO', puntos1: 0, puntos2: 0 },
  { jugador1: 'LUISMI', jugador2: 'PEDRO', puntos1: 0, puntos2: 0 },
  { jugador1: 'ANTONIO', jugador2: 'IVÁN', puntos1: 0, puntos2: 0 },
  { jugador1: 'MIGUEL', jugador2: 'JUDIT', puntos1: 0, puntos2: 0 },
];

// Example usage for multiple jornadas
const leagueData = calculatePoints([
  jornada1,
  jornada2,
  jornada3,
  jornada4,
  jornada5,
  jornada6,
  jornada7,
  jornada8,
  jornada9
]);

export {
  jornada1,
  jornada2,
  jornada3,
  jornada4,
  jornada5,
  jornada6,
  jornada7,
  jornada8,
  jornada9,
  leagueData
};
