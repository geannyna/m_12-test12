import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// modificar app.component.html(es la interfaz)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArticulosComponent } from './form-articulos/form-articulos.component';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormArticulosComponent,
    TablaArticulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
