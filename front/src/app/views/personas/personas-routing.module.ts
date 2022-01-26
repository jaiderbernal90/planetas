import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasListComponent } from './pages/personas-list/personas-list.component';

const routes: Routes = [
  {path:'',component:PersonasListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
