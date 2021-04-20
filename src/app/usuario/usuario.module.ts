import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';


import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela/listagem-usuario-tabela.component';

@NgModule({
  declarations: [CadastroUsuarioComponent, ListagemUsuarioComponent, ListagemUsuarioTabelaComponent],
  imports: [
    BrowserAnimationsModule,  
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule
  ],
  exports: [
      CadastroUsuarioComponent,
      ListagemUsuarioComponent,
      ListagemUsuarioTabelaComponent
  ]
})
export class UsuarioModule { }
