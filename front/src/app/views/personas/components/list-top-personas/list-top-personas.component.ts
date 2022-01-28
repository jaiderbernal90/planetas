import { Component, Input, OnInit } from '@angular/core';
import { CrudServices } from '../../../../shared/services/crud-services';
import { finalize } from 'rxjs/operators';
import { PersonModel } from 'src/app/shared/interfaces/person.model';

@Component({
  selector: 'app-list-top-personas',
  templateUrl: './list-top-personas.component.html',
  styleUrls: ['./list-top-personas.component.css']
})
export class ListTopPersonasComponent implements OnInit {

  personas: PersonModel[] = [];
  loading: boolean = false;


  constructor(
    private crudServices: CrudServices,
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }

  // Obtiene el top de las personas
  getPersons(){
    this.crudServices.getRequest('/persons/top')
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {        
        const {personas}=res;
        this.personas = personas;        
        this.loading = true;
      })
  }
}