import { Component } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  constructor(private servicio: AutorService){}


  data:any
  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{
      this.data =p
    })
  }

  eliminar(id: any){
    this.servicio.deleteProductos(id).subscribe()
    location.reload()
  }
}
