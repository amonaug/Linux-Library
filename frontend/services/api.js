const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001/api';

export async function fetchDistributions() {
  const res = await fetch(`${API_BASE}/distributions`);
  if (!res.ok) throw new Error('Erro ao buscar distribuições');
  return res.json();
}
