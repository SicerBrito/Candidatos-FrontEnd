import { Component, inject, Input } from '@angular/core';
import { Candidato } from '../../interfaces/candidato';
import { CandidatoService } from '../../services/candidato.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
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
