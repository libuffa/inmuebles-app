import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmueblesComponent } from '../components/inmuebles/inmuebles.component'
import { EditarComponent } from '../components/editar/editar.component'

const routes: Routes = [
  { path: '', redirectTo: '/inmuebles', pathMatch: 'full' },
       // por defecto redirigimos a la lista de tareas
  { path: 'inmuebles',     component: InmueblesComponent },
  { path: 'editar/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ InmueblesComponent, EditarComponent ]