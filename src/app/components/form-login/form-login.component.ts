import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor(private servicio:LoginService, private ruta: Router){}

  email:any;
  password:any;


  login(formulario:any){
    //console.log(formulario.value)

    this.servicio.postLogin(formulario.value).subscribe(acceso =>{
      
      let token =acceso.accessToken

      if(token!=""){
        localStorage.setItem("login","true")
        window.location.href="ofertas"
      }

      
    })
  }

}
