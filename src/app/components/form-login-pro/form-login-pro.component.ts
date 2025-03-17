import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-form-login-pro',
  templateUrl: './form-login-pro.component.html',
  styleUrls: ['./form-login-pro.component.css']
})
export class FormLoginProComponent {
  constructor(private servicio:ProveedoresService, private ruta: Router){}
  
    email:any;
    password:any;
  
  
    login(formulario:any){
      //console.log(formulario.value)
  
      this.servicio.postLogin(formulario.value).subscribe(acceso =>{
        
        let token =acceso.accessToken
  
        if(token!=""){
          localStorage.setItem("login","true")
          window.location.href="modificables"
        }
  
        
      })
    }


}
