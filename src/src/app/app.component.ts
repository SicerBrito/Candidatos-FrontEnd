import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidatoItemComponent } from './components/candidato-item/candidato-item.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { NavComponent } from './components/nav/nav.component';
import { CandidatoService } from './core/services/candidato.service';
import { CandidatoListComponent } from './pages/candidato-list/candidato-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CandidatoItemComponent, ErrorMessageComponent, NavComponent, CandidatoListComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
