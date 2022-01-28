import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { CrudServices } from 'src/app/shared/services/crud-services';
import { PlanetModel } from '../../../../shared/interfaces/planet.model';

@Component({
  selector: 'app-list-top-planetas',
  templateUrl: './list-top-planetas.component.html',
  styleUrls: ['./list-top-planetas.component.css']
})
export class ListTopPlanetasComponent implements OnInit {

  loading: boolean = false;
  planetas:PlanetModel[] = [];


  constructor(
    private crudServices: CrudServices,
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  // Obtiene el top de los planetas
  getPlanets(){
    this.crudServices.getRequest('/planets/top')
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {                
        const {planetas}=res;
        this.planetas = planetas;        
        this.loading = true;
      })
  }


}
