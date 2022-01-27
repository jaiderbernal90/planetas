import { Component, Input, OnInit } from '@angular/core';
import { CrudServices } from '../../../../shared/services/crud-services';
import { finalize } from 'rxjs/operators';
import { PersonModel } from 'src/app/shared/interfaces/person.model';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  @Input() personas: PersonModel[] = [];
  loading: boolean = false;


  constructor(
    private crudServices: CrudServices,
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }


  getPersons(){
    this.crudServices.getRequest('/persons/index')
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        const {personas}=res;
        this.personas = personas;        
        this.loading = true;
      })
  }
}
