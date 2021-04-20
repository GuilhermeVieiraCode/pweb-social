import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

    usuarios!: MatTableDataSource<Usuario>;
    exibirColunas =  ['id', 'nome', 'cpf', 'idade', 'acoes'];
    
    constructor(private usuarioService: UsuarioService,
                private roteador: Router){ }

    ngOnInit(): void {
        this.usuarioService.listar().subscribe({
        next: (usuarios) => this.usuarios = new MatTableDataSource<Usuario>(usuarios)
        }); 
    }
    
    filtrar(value: string): void{
        this.usuarios.filter = value.trim().toLowerCase();
    } 

    editar(usuario: Usuario): void{
        this.roteador.navigate(['cadastrarusuario', usuario.id]);
    }

    remover(id: number): void{
        this.usuarioService.remover(id).subscribe({
            next: resposta => {
                const index = this.usuarios.data.findIndex(usuario => usuario.id === id);
                if(index > -1){
                    this.usuarios.data.splice(index, 1);
                    this.usuarios = new MatTableDataSource(this.usuarios.data);
                }
            } 
        })
    }
}
