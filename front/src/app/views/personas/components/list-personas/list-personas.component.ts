import { Component, Input, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/shared/interfaces/person.model';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  @Input() personas: PersonModel[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
