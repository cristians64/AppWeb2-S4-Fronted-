import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormComponent } from './screens/form/form.component';
import { ErrorComponent } from './screens/error/error.component';
import { LoginComponent } from './screens/login/login.component';
import { ProveedoresComponent } from './screens/proveedores/proveedores.component';
import { OfertasComponent } from './screens/ofertas/ofertas.component';
import { ModificablesComponent } from './screens/modificables/modificables.component';
import { ofertasGuard, proveedoresGuard } from './guards/ofertas.guard';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "home", component:HomeComponent},
  { path: "editar/:id", component: ProductosComponent},
  { path: 'formulario', component: FormComponent},
  {path:"ofertas",component:OfertasComponent},
    {path:"login",component:LoginComponent,canActivate:[loginGuard]},
    {path:"productos",component:ProductosComponent,canActivate:[ofertasGuard]},
    {path:"proveedores",component:ProveedoresComponent,canMatch:[proveedoresGuard]},
    {path:"modificables",component:ModificablesComponent},
    


  {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
