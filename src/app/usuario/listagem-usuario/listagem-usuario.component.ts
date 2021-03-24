import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { USUARIOS } from 'src/app/shared/model/USUARIOS';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {
  
    usuarios = USUARIOS;

    constructor() { }

    editar(usuario: Usuario): void{
        usuario.nome += ' Alterado';
    }

    remover(usuario: Usuario): void{
        const index = this.usuarios.indexOf(usuario);
        if(index > -1){
            this.usuarios.splice(index, 1);
        }
    }

    ngOnInit(): void {
    }

}
