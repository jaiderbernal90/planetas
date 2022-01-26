import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetasListComponent } from './pages/planetas-list/planetas-list.component';

const routes: Routes = [
  {path:'',component:PlanetasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetasRoutingModule { }
