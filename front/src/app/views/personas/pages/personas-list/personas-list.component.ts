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
  
  constructor(
  ) { }

  ngOnInit(): void {
   
  }

}
