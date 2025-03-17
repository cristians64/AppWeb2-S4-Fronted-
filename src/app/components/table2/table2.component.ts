import { Component } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component {
  productos=[{
    id:"1",
    nombre:"Queso",
    precio:1.99,
    stock:60,
    imagen:"../../../assets/images/queso.jpg"
  },{
    id:"2",
    nombre:"Carne x kg",
    precio:1.59,
    stock:5.62,
    imagen:"../../../assets/images/carne.jpg"
  },{
    id:"3",
    nombre:"Leche",
    precio:0.99,
    stock:120,
    imagen:"../../../assets/images/leche.jpg"
  },{
    id:"4",
    nombre:"Huevos - media cubeta",
    precio:1.79,
    stock:40,
    imagen:"../../../assets/images/huevos.jpg"
  },{
    id:"5",
    nombre:"Mix de Mariscos",
    precio:1.00,
    stock:50,
    imagen:"../../../assets/images/mariscos.jpg"
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
