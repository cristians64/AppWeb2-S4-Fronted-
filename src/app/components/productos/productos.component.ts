import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicio:AutorService){}

 
  nombre:any
  apellido:any
  id:any
  email:any

  editar(form: any){

    this.servicio.putProductos( form.value, this.id).subscribe()

    
  }

}
