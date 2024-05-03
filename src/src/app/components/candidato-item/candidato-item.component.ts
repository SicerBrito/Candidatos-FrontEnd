import { Component, Input, inject } from '@angular/core';
import { Candidato }from '../../interfaces/candidato';
import { CommonModule, NgIf } from '@angular/common';
import { CandidatoService } from '../../services/candidato.service';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-candidato-item',
  standalone: true,
  imports: [NgIf, MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './candidato-item.component.html',
  styleUrl: './candidato-item.component.css'
})
export class CandidatoItemComponent {
  @Input() candidatoInfo!: Candidato;

  private candidatoServicio = inject(CandidatoService)
  public listaCandidato:Candidato[] = [];
  public displayedColumns: string[] = ['nombreCompleto','fechaNacimiento','genero','telefono','ciudadRecidencia','email','descripcionHabilidades','experiencia','urlLinkedIn','accion']


  obtenerCandidato(){
    this.candidatoServicio.listar().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listaCandidato = data;
        }
      },
      error:(err)=>{
        console.log(err.message);
      }
    });
  }
  
  constructor(private router:Router){
    this.obtenerCandidato;
  }

  nuevo(){
    this.router.navigate(['/candidato',0]);
  }

  editar(objeto:Candidato){
    this.router.navigate(['/candidato',objeto.id]);
  }

  eliminar(objeto:Candidato){
    if(confirm("Desea eliminar al candidato " + objeto.nombreCompleto)){
      this.candidatoServicio.eliminar(objeto.id).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            window.location.reload();
          } else{
            alert("No se pudo eliminar a " + objeto.nombreCompleto)
          }
        },
        error:(err)=>{
          console.log(err.message);
        }
      });
    }
  }

}