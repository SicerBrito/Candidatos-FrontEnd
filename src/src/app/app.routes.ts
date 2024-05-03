import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { CandidatoItemComponent } from './components/candidato-item/candidato-item.component';
import { CandidatoComponent } from './components/candidato/candidato.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component:HomeComponent},
    {path: 'candidato/:id', component:CandidatoComponent}
];
