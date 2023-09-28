import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio sea un singleton global
})
export class DataService {
  private articulos: any[] = [];

  constructor() {}

  // Métodos para acceder y manipular los datos
  getArticulos() {
    return this.articulos;
  }

  agregarArticulo(articulo: any) {
    this.articulos.push(articulo);
  }

  // Agrega más métodos según sea necesario para tu aplicación
}

