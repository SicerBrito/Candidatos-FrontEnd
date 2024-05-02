import { Component, Input } from '@angular/core';
import { Candidato }from '../../interfaces/candidato';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-candidato-item',
  standalone: true,
  imports: [NgIf ],
  templateUrl: './candidato-item.component.html',
  styleUrl: './candidato-item.component.css'
})
export class CandidatoItemComponent {
  @Input() candidatoInfo!: Candidato;



}