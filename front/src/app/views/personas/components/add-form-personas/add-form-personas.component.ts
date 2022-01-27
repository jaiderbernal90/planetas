import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CrudServices } from '../../../../shared/services/crud-services';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PlanetasModule } from 'src/app/views/planetas/planetas.module';



@Component({
  selector: 'app-add-form-personas',
  templateUrl: './add-form-personas.component.html',
  styleUrls: ['./add-form-personas.component.css']
})
export class AddFormPersonasComponent implements OnInit {

  formPersonas!:FormGroup;
  loading:boolean = false;
  id!: number;
  planetas:PlanetasModule[] = [];
  genders:any = [
    {
      id:'masculino',
      name:'Masculino',
    },
    {
      id:'femenino',
      name:'Femenino',
    },
    {
      id:'otro',
      name:'Otro',
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private crudServices: CrudServices,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

    
  isInvalid(name:any) {
    return this.formPersonas.controls[name].invalid && this.formPersonas.controls[name].touched;
  }

  ngOnInit(): void {
    this.formPersonas = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      height:  ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      planets_id: ['',],
    }) 

    // Revisa si viene algo en la URL
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.id = id;
      if ( this.id) {
        this.getPersona(this.id)
        this.updateCounter();
      }
    });

    this.getPlanets();
  }
  onSubmit(){    
    this.loading = true;    

    const path = (this.id) ? `/persons/update/${this.id}` : '/persons/create';

    this.crudServices.postRequest(path, this.formPersonas.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res:any) => {   
        console.log(res);
              
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
      })
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
   // Obtiene el planeta al editar
   getPersona(id:number){
    this.crudServices.getRequest(`/persons/edit/${id}`)
    .pipe(finalize(() => this.loading = false))
    .subscribe((res: any) => {  
      console.log(res);
      
      const {persona}=res;
      this.formPersonas.patchValue(persona);      
      this.loading = true;
    })
  }

  updateCounter(){
    this.crudServices.getRequest(`/persons/edit/${this.id}`)
    .pipe(finalize(() => this.loading = false))
    .subscribe((res: any) => {  
      
    })
  }

}
