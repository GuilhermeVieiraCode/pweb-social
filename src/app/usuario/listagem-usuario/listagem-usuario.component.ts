import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {
  
    usuarios!: Array<Usuario>;

    constructor(private usuarioService: UsuarioService) { }
    
    ngOnInit(): void {
        this.usuarioService.listar().subscribe({
            next: (usuarios) => this.usuarios = usuarios
        });
    }

    editar(usuario: Usuario): void{
        usuario.nome += ' Alterado';
    }

    remover(usuario: Usuario): void{
        const index = this.usuarios.indexOf(usuario);
        if(index > -1){
            this.usuarios.splice(index, 1);
        }
    }


}
