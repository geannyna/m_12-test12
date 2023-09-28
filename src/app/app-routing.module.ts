import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArticulosComponent } from './form-articulos/form-articulos.component';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';
// modificar app.component.html(es la interfaz)
const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', component: FormArticulosComponent },
  { path: 'tabla', component: TablaArticulosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

