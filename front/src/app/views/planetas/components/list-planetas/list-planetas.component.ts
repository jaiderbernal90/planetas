import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { CrudServices } from 'src/app/shared/services/crud-services';
import { PlanetModel } from '../../../../shared/interfaces/planet.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  // Obtiene los planetas
  getPlanets(){
    this.crudServices.getRequest('/planets/index')
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {        
        const {planetas}=res;
        this.planetas = planetas;        
        this.loading = true;
      })
  }

    // Eliminar planetas
    delete(id: number) {
      this.crudServices.deleteRequest(`/planets/destroy/${id}`)
      .pipe(finalize(() => this.loading = false))
        .subscribe((res: any) => {
          if(res.success){
            Swal.fire({          
              timer: 1500,
              title: 'Opreación exitosa!',
              text:  res.message,
              icon: 'success',
            }) .then(() => {
                this.router.navigateByUrl('/planetas');
            });
          }else{
            Swal.fire({          
              timer: 1500,
              title: 'Opreación fallida!',
              text:  res.message,
              icon: 'warning',
            })
          }  
          this.getPlanets();
        })
    }

    actionDelete(planeta:PlanetModel){
      Swal.fire({
        title: `¿Está seguro que quiere borrar el planeta - ${planeta.name}?`,
        text: "Esta acción no tiene vuelta atrás",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
            this.delete(planeta.id)
        }
      })
    }

}
