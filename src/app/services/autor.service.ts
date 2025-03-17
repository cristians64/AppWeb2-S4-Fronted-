import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }


  //private API_AUTOR = "http://localhost:8080/lista/autores2"
  private API_AUTOR = "http://localhost:9090/autores"


  getProducto():Observable<any>{
    return this.http.get(this.API_AUTOR)
  }

  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_AUTOR, producto)
  }

 
  putProductos( producto: any, id: any): Observable <any>{
    this.API_AUTOR= `${this.API_AUTOR}/${id}`
    return this.http.put( this.API_AUTOR, producto)
  }

  deleteProductos(id: any): Observable <any>{
    this.API_AUTOR= `${this.API_AUTOR}/${id}`
    return this.http.delete(this.API_AUTOR)
    
  }

}
