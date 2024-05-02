import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { CandidatoService } from '../../core/services/candidato.service';
import { Observable } from 'rxjs';
import { Candidato } from '../../interfaces/candidato';
import { CandidatoItemComponent } from '../../components/candidato-item/candidato-item.component';

@Component({
  selector: 'app-candidato-list',
  standalone: true,
  imports: [AsyncPipe, ErrorMessageComponent, CandidatoItemComponent],
  templateUrl: './candidato-list.component.html',
  styleUrl: './candidato-list.component.css'
})
export class CandidatoListComponent implements OnInit {

  public candidatos$!: Observable<Candidato[]>;
  constructor(private service: CandidatoService) { }


  ngOnInit(): void {
    this.candidatos$ = this.service.getCandidatoList();
  }


}
