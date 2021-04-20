import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {
  
    usuarios!: Array<Usuario>;

    constructor(private usuarioService: UsuarioService,
                private roteador: Router) { }
    
    ngOnInit(): void {
        this.usuarioService.listar().subscribe({
            next: (usuarios) => this.usuarios = usuarios
        });
    }

    editar(usuario: Usuario): void{
        this.roteador.navigate(['cadastrarusuario', usuario.id]);
    }

    remover(usuario: Usuario): void{
        this.usuarioService.remover(usuario.id).subscribe({
            next: resposta => {
                const index = this.usuarios.indexOf(usuario);
                if(index > -1){
                    this.usuarios.splice(index, 1);
                }

            } 
        })
    }
}
