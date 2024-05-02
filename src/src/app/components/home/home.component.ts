import { Component } from '@angular/core';
import { CandidatoListComponent } from '../../pages/candidato-list/candidato-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CandidatoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
