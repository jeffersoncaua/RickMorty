import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Episodio, Personagem, RespostaApi } from '../models/rick-morty';

@Injectable({ providedIn: 'root' })
export class RickMorty {
  private http = inject(HttpClient);
  private base = 'https://rickandmortyapi.com/api';

  getPersonagens(pagina = 1, nome = ''): Observable<RespostaApi<Personagem>> {
    return this.http.get<RespostaApi<Personagem>>(
      `${this.base}/character?page=${pagina}&name=${nome}`
    );
  }

  getPersonagemPorId(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.base}/character/${id}`);
  }

  getEpisodios(pagina = 1): Observable<RespostaApi<Episodio>> {
    return this.http.get<RespostaApi<Episodio>>(`${this.base}/episode?page=${pagina}`);
  }
}