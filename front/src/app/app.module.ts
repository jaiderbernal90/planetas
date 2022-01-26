import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './views/app-component/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PlanetasModule } from './views/planetas/planetas.module';
import { PersonasModule } from './views/personas/personas.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlanetasModule,
    PersonasModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
