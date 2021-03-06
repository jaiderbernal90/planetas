import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonasComponent } from './pages/add-personas/add-personas.component';
import { PersonasListComponent } from './pages/personas-list/personas-list.component';
import { PersonasTopComponent } from './pages/personas-top/personas-top.component';

const routes: Routes = [
  {path:'',component:PersonasListComponent},
  {path:'registrar',component:AddPersonasComponent},
  {path:'personas/top',component:PersonasTopComponent},
  {path:'personas/:id',component:AddPersonasComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
