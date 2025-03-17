import { Component } from '@angular/core';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  logout(){
    localStorage.setItem("login","false")
    window.location.href="login"
  }

  vista=true;

  cambio(){
    this.vista=!this.vista
  }
}
