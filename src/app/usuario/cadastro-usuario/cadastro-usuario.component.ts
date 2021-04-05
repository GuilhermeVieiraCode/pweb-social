import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor( private usuarioService: UsuarioService) { 
    this.usuario = new Usuario();
  }

  inserirUsuario(){
    this.usuarioService.inserir(this.usuario).subscribe({
        next: (usuario) => console.log(usuario)
    });
    this.usuario = new Usuario;
  }

  ngOnInit(): void {
  }

}
