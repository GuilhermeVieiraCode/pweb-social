import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {
  
    usuarios = [
        {nome: 'Usuario 1', cpf: '123', idade: 21},
        {nome: 'Usuario 2', cpf: '124', idade: 22},
        {nome: 'Usuario 3', cpf: '125', idade: 23},
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
