import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { UsuarioService } from './Services/usuario.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CompartidosModule
  ],
  exports:[
    LoginComponent
  ],
  providers:[
    UsuarioService
  ]
})
export class UsuariosModule { }
