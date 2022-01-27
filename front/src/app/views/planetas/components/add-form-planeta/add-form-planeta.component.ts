import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CrudServices } from '../../../../shared/services/crud-services';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PersonModel } from 'src/app/shared/interfaces/person.model';


@Component({
  selector: 'app-add-form-planeta',
  templateUrl: './add-form-planeta.component.html',
  styleUrls: ['./add-form-planeta.component.css']
})
export class AddFormPlanetaComponent implements OnInit {

  formPlanetas!:FormGroup;
  loading:boolean = false;
  id!: number;
  personas:PersonModel[] = [];
  editar:boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private crudServices: CrudServices,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

    
  isInvalid(name:any) {
    return this.formPlanetas.controls[name].invalid && this.formPlanetas.controls[name].touched;
  }

  ngOnInit(): void {
    this.formPlanetas = this.formBuilder.group({
      name: ['', Validators.required],
      rotationPeriod: ['', Validators.required],
      diameter:  ['', Validators.required],
      weather: ['', Validators.required],
      ground: ['', Validators.required], 
    }) 

    // Revisa si viene algo en la URL
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.id = id;
      if ( this.id) {
        this.getPlaneta(this.id)
        this.editar = true;
        this.getPersons();
      }
    });
  }
  // Envia la data a la bd
  onSubmit(){    
    this.loading = true;    

    const path = (this.id) ? `/planets/update/${this.id}` : '/planets/create';

    this.crudServices.postRequest(path, this.formPlanetas.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res:any) => {                
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
      })
  }

  // Obtiene las personas registradas a ese planeta
  getPersons(){
    this.crudServices.getRequest(`/planets/getPersonsPlanet/${this.id}`)
    .pipe().subscribe((res: any) => {
      const {planetas}=res;
      this.personas = planetas;        
    })
  }
  // Obtiene el planeta al editar
  getPlaneta(id:number){
    this.crudServices.getRequest(`/planets/edit/${id}`)
    .pipe(finalize(() => this.loading = false))
    .subscribe((res: any) => {  
      const {planeta}=res;
      this.formPlanetas.patchValue(planeta);      
      this.loading = true;
    })
  }
}
