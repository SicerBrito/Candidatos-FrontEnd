import { Component, inject, Input } from '@angular/core';
import { CandidatoListComponent } from '../../pages/candidato-list/candidato-list.component';
import { CandidatoItemComponent } from '../candidato-item/candidato-item.component';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Candidato } from '../../interfaces/candidato';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CandidatoService } from '../../services/candidato.service';
import { AgregarComponent } from '../agregar/agregar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CandidatoListComponent, CandidatoItemComponent, MatButtonModule, MatCardModule, MatTableModule, AgregarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
