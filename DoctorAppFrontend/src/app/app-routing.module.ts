import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Usuarios/login/login.component';
import { LayoutComponent } from './compartidos/layout/layout.component';

const routes: Routes = [

  {
    path: '', 
    component: LoginComponent, 
    pathMatch: 'full'
  },
  {
    path: 'login', 
    component: LoginComponent, 
    pathMatch: 'full'
  },
  {
    path: 'layout', 
    component: LayoutComponent, 
    pathMatch: 'full'
   },
  {
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
