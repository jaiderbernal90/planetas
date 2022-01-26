import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetasListComponent } from './pages/planetas-list/planetas-list.component';
import { ListTopPlanetasComponent } from './components/list-top-planetas/list-top-planetas.component';
import { ListPlanetasComponent } from './components/list-planetas/list-planetas.component';


@NgModule({
  declarations: [
    PlanetasListComponent,
    ListTopPlanetasComponent,
    ListPlanetasComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule,
  ]
})
export class PlanetasModule { }
