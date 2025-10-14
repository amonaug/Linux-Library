import { useEffect, useState } from 'react';
import { fetchDistributions } from '../services/api';


function App() {
  const [distros, setDistros] = useState([]);

  useEffect(() => {
    fetchDistributions().then(setDistros).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Linux Library 🐧</h1>
      <ul>
        {distros.map(d => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
