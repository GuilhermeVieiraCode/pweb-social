import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() { 
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }

  inserirUsuario(){
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario;
  }

  ngOnInit(): void {
  }

}
