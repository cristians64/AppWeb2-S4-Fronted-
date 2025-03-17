import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './screens/form/form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './screens/login/login.component';
import { ErrorComponent } from './screens/error/error.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ProveedoresComponent } from './screens/proveedores/proveedores.component';
import { OfertasComponent } from './screens/ofertas/ofertas.component';
import { TableComponent } from './components/table/table.component';
import { Table2Component } from './components/table2/table2.component';
import { Carrusel1Component } from './components/carrusel1/carrusel1.component';
import { Carrusel2Component } from './components/carrusel2/carrusel2.component';
import { ModificablesComponent } from './screens/modificables/modificables.component';
import { FormLoginProComponent } from './components/form-login-pro/form-login-pro.component';
import { Modificables2Component } from './components/modificables2/modificables2.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    TablaComponent,
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    ErrorComponent,
    FormLoginComponent,
    ProveedoresComponent,
    OfertasComponent,
    TableComponent,
    Table2Component,
    Carrusel1Component,
    Carrusel2Component,
    ModificablesComponent,
    FormLoginProComponent,
    Modificables2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
