import { Component } from '@angular/core';

@Component({
  selector: 'app-modificables',
  templateUrl: './modificables.component.html',
  styleUrls: ['./modificables.component.css']
})
export class ModificablesComponent {

  logout(){
    localStorage.setItem("login","false")
    window.location.href="login"
  }

  vista=true;

  cambio(){
    this.vista=!this.vista
  }

}
