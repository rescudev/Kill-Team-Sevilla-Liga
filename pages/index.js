import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Sample league data with player names, factions, and all numeric values set to 0

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
    { nombre: 'RAFA E', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'KAKE', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'MIGUEL', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'PEDRO', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
    { nombre: 'IVÁN', faccion: 'Space Marines', jugadas: 0, victorias: 0, empates: 0, derrotas: 0, puntos: 0 },
  ];

  // Sort the league data by victories, empates, and puntos in descending order
  const sortedLeagueData = [...leagueData].sort((a, b) => {
    // First level sorting by victories
    if (b.victorias !== a.victorias) {
      return b.victorias - a.victorias;
    }
    // Second level sorting by empates
    if (b.empates !== a.empates) {
      return b.empates - a.empates;
    }
    // Third level sorting by puntos
    return b.puntos - a.puntos;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Kill Team Sevilla</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      {/* Navbar */}
      <div className="w3-top">
        {/* ... (Your existing Navbar code) */}
      </div>

      {/* Navbar on small screens */}
      <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{ marginTop: '46px' }}>
        {/* ... (Your existing Navbar on small screens code) */}
      </div>

      {/* Page content */}
      <div className="w3-content" style={{ maxWidth: '2000px', marginTop: '46px' }}>
        {/* Automatic Slideshow Images */}
        <div className="mySlides w3-display-container w3-center">
          {/* ... (Your existing Slideshow content) */}
        </div>

        {/* The Kill Team League Table */}
        <div className="w3-container w3-content w3-padding-64" style={{ maxWidth: '800px' }}>
          <h2 className="w3-wide">Liga Kill Team Sevilla</h2>
          <table className={`w3-table w3-striped w3-bordered ${styles.leagueTable}`}>
            <thead>
              <tr>
                <th>Posición</th>
                <th>Nombre</th>
                <th>Facción</th>
                <th>Jugadas</th>
                <th>Victorias</th>
                <th>Empates</th>
                <th>Derrotas</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the sorted data to generate table rows dynamically */}
              {sortedLeagueData.map((player, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{player.nombre}</td>
                  <td>{player.faccion}</td>
                  <td style={{ textAlign: 'center' }}>{player.jugadas}</td>
                  <td style={{ textAlign: 'center' }}>{player.victorias}</td>
                  <td style={{ textAlign: 'center' }}>{player.empates}</td>
                  <td style={{ textAlign: 'center' }}>{player.derrotas}</td>
                  <td style={{ textAlign: 'center' }}>{player.puntos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <script>
        {/* ... (Your existing JavaScript code) */}
      </script>
    </div>
  );
}
