import { Component, inject } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {

  email:any;
  password:any;

  servicio=inject(LoginService)
  token=""

  rol(formulario:any){

    this.servicio.postLogin(formulario.value).subscribe(acceso=>{
      console.log(acceso)
      this.token=acceso.accessToken

      if(this.token!=""){
        sessionStorage.setItem("producto","true")
        window.location.href="productos"
      }

    }) 
  }

}
