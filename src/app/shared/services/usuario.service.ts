import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Usuario[]> {
      return this.httpClient.get<Usuario[]>(this.url);
  }

  pesquisar(id: number): Observable<Usuario>{
      return this.httpClient.get<Usuario>(`${this.url}/${id}`);
  }

  inserir(usuario: Usuario): Observable<Usuario>{
      return this.httpClient.post<Usuario>(this.url, usuario);
  }

  remover(id: number): Observable<object>{
      return this.httpClient.delete(`${this.url}/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
      return this.httpClient.put<Usuario>(`${this.url}/${usuario.id}`, usuario);
  }
}
