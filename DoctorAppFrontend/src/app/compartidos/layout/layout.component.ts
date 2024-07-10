import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompartidoService } from '../Services/compartido.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userName: string = '';

  constructor(private router:Router, private compartidoService: CompartidoService)
  {

  }

  ngOnInit(): void {
    const usuarioToken = this.compartidoService.obtenerSesion();
    if (usuarioToken!=null) {

      this.userName = usuarioToken.userName;
    }
  }

  cerrarSesion(){
   this.compartidoService.eliminarSesion();
   this.router.navigate(['layout']);
  }


}
