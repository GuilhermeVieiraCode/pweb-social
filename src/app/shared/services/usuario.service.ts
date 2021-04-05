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

  inserir(usuario: Usuario): Observable<Usuario>{
      return this.httpClient.post<Usuario>(this.url, usuario);
  }
}
