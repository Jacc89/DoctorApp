import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UsuariosModule } from './Usuarios/usuarios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule, 
    BrowserAnimationsModule,
    // modulos de api
    MaterialModule,
    UsuariosModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
