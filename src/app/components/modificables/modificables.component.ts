import { Component } from '@angular/core';

@Component({
  selector: 'app-modificables',
  templateUrl: './modificables.component.html',
  styleUrls: ['./modificables.component.css']
})
export class ModificablesComponent {

  productos=[{
    id:"1",
    nombre:"Arroz",
    precio:7.99,
    stock:60,
    imagen:"../../../assets/images/arroz.jpg"
  },{
    id:"2",
    nombre:"Aceite",
    precio:2.99,
    stock:120,
    imagen:"../../../assets/images/aceite.jpg"
  },{
    id:"3",
    nombre:"Azucar",
    precio:1.99,
    stock:300,
    imagen:"../../../assets/images/azucar.jpg"
  },{
    id:"4",
    nombre:"Sal",
    precio:0.89,
    stock:300,
    imagen:"../../../assets/images/sal.jpg"
  },{
    id:"5",
    nombre:"Pan de Molde",
    precio:1.00,
    stock:36,
    imagen:"../../../assets/images/pan.jpg"
  }]

  carrito: any[] = [];
  totalCompra: number = 0;
  facturaVisible: boolean = false;   
  iva: number = 0;
  totalConIva: number = 0;
  tasaIva: number = 0.16;

  agregarAlCarrito(producto: any) {
    if (producto.stock > 0) {
      let itemCarrito = this.carrito.find(item => item.id === producto.id);

      if (itemCarrito) {
        itemCarrito.cantidad++;
      } else {
        this.carrito.push({ ...producto, cantidad: 1 });
      }

      producto.stock--; // Reducir stock en la vista
      this.calcularTotal();
    }
  }

  calcularTotal() {
    this.totalCompra = parseFloat(this.carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2));
  this.iva = parseFloat((this.totalCompra * this.tasaIva).toFixed(2));
  this.totalConIva = parseFloat((this.totalCompra + this.iva).toFixed(2));
  }

  generarFactura() {
    if (this.carrito.length > 0) {
      this.facturaVisible = true;
    } else {
      alert('El carrito está vacío. Agrega productos antes de generar la factura.');
    }
  }

}
