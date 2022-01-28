import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// 
import { PersonasListComponent } from './pages/personas-list/personas-list.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';
import { ListTopPersonasComponent } from './components/list-top-personas/list-top-personas.component';
import { AddFormPersonasComponent } from './components/add-form-personas/add-form-personas.component';
import { AddPersonasComponent } from './pages/add-personas/add-personas.component';
import { PersonasTopComponent } from './pages/personas-top/personas-top.component';


@NgModule({
  declarations: [
    PersonasListComponent,
    ListPersonasComponent,
    ListTopPersonasComponent,
    AddFormPersonasComponent,
    AddPersonasComponent,
    PersonasTopComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }