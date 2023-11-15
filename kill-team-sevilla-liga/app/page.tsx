import Head from 'next/head';

interface Player {
  nombre: string;
  faccion: string;
  jugadas: number;
  victorias: number;
  empates: number;
  derrotas: number;
  puntos: number;
}

export default function Home() {
  const leagueData = [
    { nombre: 'JOSEMA', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'FERNANDO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'KRIS', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'JESÚS', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'JUANJO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'JUDIT', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'LUCAS', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'LUISMI', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'RAFA M', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
	  { nombre: 'ALFONSO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'RAFA E', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
	  { nombre: 'ANTONIO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'KAKE', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'MIGUEL', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'PEDRO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'IVÁN', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
  ];

  const sortedLeagueData = [...leagueData].sort((a, b) => {
    if (b.victorias !== a.victorias) {
      return b.victorias - a.victorias;
    }
    if (b.empates !== a.empates) {
      return b.empates - a.empates;
    }
    return b.empates - a.empates;
  });

  return (
    <div>
      <Head>
        <title>Kill Team Sevilla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#333', color: 'white', margin: 0, padding: 0 }}>
        {/* The Kill Team League Table */}
        <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Liga Kill Team Sevilla</h2>
        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
              fontSize: '12px', // Adjusted font size
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#555', color: 'white' }}>
                <th style={tableHeaderStyles}>Pos.</th>
                <th style={tableHeaderStyles}>Nombre</th>
                <th style={tableHeaderStyles}>Facción</th>
                <th style={tableHeaderStyles}>J</th>
                <th style={tableHeaderStyles}>V</th>
                <th style={tableHeaderStyles}>E</th>
                <th style={tableHeaderStyles}>D</th>
                <th style={tableHeaderStyles}>PTS</th>
              </tr>
            </thead>
            <tbody>
              {sortedLeagueData.map((player, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 1 ? '#666' : 'transparent' }}>
                  <td style={tableCellStyles}>{index + 1}</td>
                  <td style={tableCellStyles}>{player.nombre}</td>
                  <td style={tableCellStyles}>{player.faccion}</td>
                  <td style={tableCellStyles}>{player.jugadas}</td>
                  <td style={tableCellStyles}>{player.victorias}</td>
                  <td style={tableCellStyles}>{player.empates}</td>
                  <td style={tableCellStyles}>{player.derrotas}</td>
                  <td style={tableCellStyles}>{player.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const tableHeaderStyles: React.CSSProperties = {
  padding: '5px', // Adjusted padding
  textAlign: 'center',
  whiteSpace: 'nowrap',
};

const tableCellStyles: React.CSSProperties = {
  ...tableHeaderStyles,
  textAlign: 'center',
  wordBreak: 'break-word',
};
