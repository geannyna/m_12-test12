import { Component, Input, OnInit  } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.component.html',
  styleUrls: ['./tabla-articulos.component.css']
})
export class TablaArticulosComponent implements OnInit  {
  // Declaración de propiedad para almacenar los artículos
  @Input() articulos: any[] = [];

  constructor(private articulosService: DataService, private router: Router) {
    // Obtener los artículos del servicio al inicializar la página
    this.articulos = this.articulosService.getArticulos();
   console.log(this.articulos);
  }
  ngOnInit() {
    // obtener los articulos
    this.articulos = this.articulosService.getArticulos();  
  }

  
  navigateToForm() {
    this.router.navigate(['/form']);
  }
}
