import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './views/app-component/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PlanetasModule } from './views/planetas/planetas.module';
import { PersonasModule } from './views/personas/personas.module';
import { IndexComponent } from './views/index/index.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlanetasModule,
    PersonasModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LoadingBarHttpClientModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
