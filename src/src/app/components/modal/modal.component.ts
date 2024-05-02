import { Component } from '@angular/core';
import { CandidatoListComponent } from '../../pages/candidato-list/candidato-list.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CandidatoListComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}
