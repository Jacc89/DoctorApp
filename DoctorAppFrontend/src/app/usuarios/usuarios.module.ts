import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { UsuarioService } from './Services/usuario.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompartidosModule
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuariosModule { }
