import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test_modulo_12';
  articulos: any[] = [];

  constructor() {
    // Define la matriz de artículos aquí como pública
    this.articulos = [
      {
        nombre: ' Artículo ',
        marca: ' Marca ',
        modelo: ' Modelo ',
        descripcion: 'Descripción ',
        precio: 0
      },
      
     
      // Agrega más artículos según sea necesario
    ];
  }
}
