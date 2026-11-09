export interface Personagem {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
  episode: string[];
}

export interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export interface RespostaApi<T> {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: T[];
}