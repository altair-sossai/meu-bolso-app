import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteirasComponent } from '../modules/cadastros/carteiras/components/carteiras/carteiras.component';
import { CategoriasComponent } from '../modules/cadastros/categoriamovimentacao/components/categorias/categorias/categorias.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'carteiras', component: CarteirasComponent },
  { path: 'categorias', component: CategoriasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
