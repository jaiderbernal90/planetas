import { Component, Input, OnInit } from '@angular/core';
import { CrudServices } from '../../../../shared/services/crud-services';
import { finalize } from 'rxjs/operators';
import { PersonModel } from 'src/app/shared/interfaces/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PlanetModel } from 'src/app/shared/interfaces/planet.model';


@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  personas: PersonModel[] = [];
  loading: boolean = false;


  constructor(
    private crudServices: CrudServices,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPersons();
  }
  // Obtener las personas
  getPersons(){
    this.crudServices.getRequest('/persons/index')
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        const {personas}=res;
        this.personas = personas;        
        this.loading = true;
      })
  }
  // Eliminar personas
  delete(id: number) {
    this.crudServices.deleteRequest(`/persons/destroy/${id}`)
    .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        if(res.success){
          Swal.fire({          
            timer: 1500,
            title: 'Opreación exitosa!',
            text:  res.message,
            icon: 'success',
          }) .then(() => {
              this.router.navigateByUrl('/personas');
          });
        }else{
          Swal.fire({          
            timer: 1500,
            title: 'Opreación fallida!',
            text:  res.message,
            icon: 'warning',
          })
        }  
        this.getPersons();
      })
  }

  actionDelete(person:PersonModel){
    Swal.fire({
      title: `¿Está seguro que quiere borrar la persona - ${person.name}?`,
      text: "Esta acción no tiene vuelta atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
          this.delete(person.id)
      }
    })
  }

}
