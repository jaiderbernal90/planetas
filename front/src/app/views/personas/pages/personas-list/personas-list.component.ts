import { Component, OnInit } from '@angular/core';
import { CrudServices } from '../../../../shared/services/crud-services';
import { finalize } from 'rxjs/operators';
import { PersonModel } from 'src/app/shared/interfaces/person.model';


@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {
  
  loading: boolean = false;
  personas:PersonModel[] = [];


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
        console.log(res);
        const {personas}=res;
        this.personas = personas;
        console.log(this.personas);
        
        this.loading = true;
      })
  }

}
