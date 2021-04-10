import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  operacaoCadastro = true;

  constructor( private usuarioService: UsuarioService,
               private rotaAtual: ActivatedRoute,
               private roteador: Router ) { 
    
            this.usuario = new Usuario();
            if(this.rotaAtual.snapshot.paramMap.has('id')){
                this.operacaoCadastro = false;
                const idEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));

                this.usuarioService.pesquisar(idEdicao).subscribe({
                    next: usuarioRetornado => this.usuario = usuarioRetornado
                })
            }
  }
  
  ngOnInit(): void {}
  
  inserirUsuario(){
    if(this.usuario.id){
        this.usuarioService.atualizar(this.usuario).subscribe({
            next: usuarioAtualizado => {
                console.log(usuarioAtualizado);
                this.roteador.navigate(['listarusuario']);    
            }
        })
    }else{  
        this.usuarioService.inserir(this.usuario).subscribe({
            next: (usuarioInserido) => {
                console.log(usuarioInserido);
                this.roteador.navigate(['listarusuario']);    

            }
        });
    }
  }
}
