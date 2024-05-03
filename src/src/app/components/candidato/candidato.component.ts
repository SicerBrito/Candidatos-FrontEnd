import { Component, inject, Input, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CandidatoService } from '../../services/candidato.service';
import { Router } from '@angular/router';
import { Candidato } from '../../interfaces/candidato';

@Component({
  selector: 'app-candidato',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.css'
})
export class CandidatoComponent implements OnInit {

  @Input("id")id!: number;
  private candidatoService = inject(CandidatoService)
  public formBuild = inject(FormBuilder)

  public formCandidato: FormGroup = this.formBuild.group({
    nombreCompleto: [],
    fechaNacimiento: [],
    genero: [],
    telefono: [],
    ciudadRecidencia: [],
    email: [],
    descripcionHabilidades: [],
    experiencia: [],
    urlLinkedIn: []
  });

  constructor(private router:Router){}

  ngOnInit(): void {
    if(this.id != 0){
      this.candidatoService.obtener(this.id).subscribe({
        next:(data) =>{
          this.formCandidato.patchValue({
            nombreCompleto: data.nombreCompleto,
            fechaNacimiento: data.fechaNacimiento,
            genero: data.genero,
            telefono: data.telefono,
            ciudadRecidencia: data.ciudadRecidencia,
            email: data.email,
            descripcionHabilidades: data.descripcionHabilidades,
            experiencia: data.experiencia,
            urlLinkedIn: data.urlLinkedIn
          });
        },
        error:(err) => {
          console.log(err.mesagge)
        }
      })
    }
  }


  guardar(){
    const objeto: Candidato = {
      id: this.id,
      nombreCompleto: this.formCandidato.value.nombreCompleto,
      fechaNacimiento: this.formCandidato.value.fechaNacimiento,
      genero: this.formCandidato.value.genero,
      telefono: this.formCandidato.value.telefono,
      ciudadRecidencia: this.formCandidato.value.ciudadRecidencia,
      email: this.formCandidato.value.email,
      descripcionHabilidades: this.formCandidato.value.descripcionHabilidades,
      experiencia: this.formCandidato.value.experiencia,
      urlLinkedIn: this.formCandidato.value.urlLinkedIn
    }

    if(this.id == 0){
      this.candidatoService.crear(objeto).subscribe({
        next:(data) =>{
          if(data.isSuccess){
            this.router.navigate(["/"]);
          } else{
            alert("Error al crear")
          }
        },
        error:(err) => {
          console.log(err.mesagge)
        }
      })
    }else {
      this.candidatoService.editar(objeto).subscribe({
        next:(data) =>{
          if(data.isSuccess){
            this.router.navigate(["/"]);
          } else{
            alert("Error al editar")
          }
        },
        error:(err) => {
          console.log(err.mesagge)
        }
      })
    }
  }

  volver(){
    this.router.navigate(["/"]);
  }


}