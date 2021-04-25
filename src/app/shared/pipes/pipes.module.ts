import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { FonePipe } from './fone.pipe';

@NgModule({
  declarations: [CpfPipe, FonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    FonePipe
  ]
})
export class PipesModule { }
