import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-form-articulos',
  templateUrl: './form-articulos.component.html',
  styleUrls: ['./form-articulos.component.css']
})
export class FormArticulosComponent {
  
  articulo = {
    nombre: '',
    marca: '',
    modelo: '',
    descripcion: '',
    precio: 0 
  };

  constructor(private articulosService: DataService, private router: Router) { }

  submitForm() {
    // Agrega el artículo al array
    this.articulosService.agregarArticulo(this.articulo);
  
    // Limpia el formulario
    this.articulo = {
      nombre: '',
      marca: '',
      modelo: '',
      descripcion: '',
      precio: 0
    };
  

 
    // Navega a la página de la tabla después de guardar
    this.router.navigate(['/tabla']);
 
}
 
}
