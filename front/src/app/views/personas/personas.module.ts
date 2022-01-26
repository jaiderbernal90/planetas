import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasListComponent } from './pages/personas-list/personas-list.component';
import { AddPersonasComponent } from './components/add-personas/add-personas.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { ListTopPersonasComponent } from './components/list-top-personas/list-top-personas.component';


@NgModule({
  declarations: [
    PersonasListComponent,
    AddPersonasComponent,
    ListPersonasComponent,
    ListTopPersonasComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
