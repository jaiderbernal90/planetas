import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './views/app-component/app.component';
import { IndexComponent } from './views/index/index.component';
import { PersonasListComponent } from './views/personas/pages/personas-list/personas-list.component';
import { PlanetasListComponent } from './views/planetas/pages/planetas-list/planetas-list.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {
    path:'personas',
    loadChildren: () => import('./views/personas/personas.module').then((m) => m.PersonasModule)
  },
  {
    path:'planetas',
    loadChildren: () => import('./views/planetas/planetas.module').then((m) => m.PlanetasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
