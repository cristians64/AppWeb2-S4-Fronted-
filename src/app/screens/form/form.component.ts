import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private servicio: AutorService, private ruta: Router){}

  nombre:any
  apellido:any
  id:any
  email:any

  cargar(form: any){


    this.servicio.postProducto(form.value).subscribe()

    console.log(form.value)
    
    location.reload()
  }
}
