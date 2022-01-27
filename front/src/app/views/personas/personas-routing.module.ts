import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonasComponent } from './pages/add-personas/add-personas.component';
import { PersonasListComponent } from './pages/personas-list/personas-list.component';

const routes: Routes = [
  {path:'',component:PersonasListComponent},
  {path:'registrar',component:AddPersonasComponent},
  {path:'registrar/:id',component:AddPersonasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
