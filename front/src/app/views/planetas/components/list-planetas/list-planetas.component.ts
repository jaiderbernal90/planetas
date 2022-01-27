import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { CrudServices } from 'src/app/shared/services/crud-services';
import { PlanetModel } from '../../../../shared/interfaces/planet.model';

@Component({
  selector: 'app-list-planetas',
  templateUrl: './list-planetas.component.html',
  styleUrls: ['./list-planetas.component.css']
})
export class ListPlanetasComponent implements OnInit {

    
  loading: boolean = false;
  planetas:PlanetModel[] = [];


  constructor(
    private crudServices: CrudServices,
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }


  getPlanets(){
    this.crudServices.getRequest('/planets/index')
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {        
        const {planetas}=res;
        this.planetas = planetas;        
        this.loading = true;
      })
  }

}
