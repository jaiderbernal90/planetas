import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetasListComponent } from './pages/planetas-list/planetas-list.component';
import { ListTopPlanetasComponent } from './components/list-top-planetas/list-top-planetas.component';
import { ListPlanetasComponent } from './components/list-planetas/list-planetas.component';
import { AddFormPlanetaComponent } from './components/add-form-planeta/add-form-planeta.component';
import { AddPlanetasComponent } from './pages/add-planetas/add-planetas.component';
import { PlanetasTopComponent } from './pages/planetas-top/planetas-top.component';


@NgModule({
  declarations: [
    PlanetasListComponent,
    ListTopPlanetasComponent,
    ListPlanetasComponent,
    AddFormPlanetaComponent,
    AddPlanetasComponent,
    PlanetasTopComponent
  ],
  imports: [
    CommonModule,
    PlanetasRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PlanetasModule { }
