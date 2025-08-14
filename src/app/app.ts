import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCardComponent } from './componente1/componente1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductoCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  titulo = 'Lista de Productos Joseph';
  fechaActual = new Date();
  productos: string[] = ['Pantalones', 'Telefono', 'Audifonos'];
  mostrarLista = true;
  nuevoProducto = '';

  ocultarLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  agregarProducto() {
    if (this.nuevoProducto.trim()) {
      this.productos.push(this.nuevoProducto.trim());
      this.nuevoProducto = '';
    }
  }
}