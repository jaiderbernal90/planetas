import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanetasComponent } from './pages/add-planetas/add-planetas.component';
import { PlanetasListComponent } from './pages/planetas-list/planetas-list.component';
import { PlanetasTopComponent } from './pages/planetas-top/planetas-top.component';

const routes: Routes = [
  {path:'',component:PlanetasListComponent},
  {path:'registrar',component:AddPlanetasComponent},
  {path:'planetas/top',component:PlanetasTopComponent},
  {path:'planetas/:id',component:AddPlanetasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetasRoutingModule { }
