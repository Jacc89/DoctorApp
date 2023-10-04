import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { UsuarioService } from './Services/usuario.service';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CompartidosModule,
    MaterialModule
  ],
  exports:[
    LoginComponent
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuariosModule { }
