import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';

const routes: Routes = [
    {
        path: 'cadastrarusuario',
        component: CadastroUsuarioComponent
    },
    {
        path: 'cadastrarusuario/:id',
        component: CadastroUsuarioComponent
    },
    {
        path: 'listarusuario',
        component: ListagemUsuarioComponent
    },
    {
        path: '',
        component: ListagemUsuarioComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
