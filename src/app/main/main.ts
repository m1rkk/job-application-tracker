import { Component } from '@angular/core';
import {Positions} from '../components/positions/positions';
import {ApplicantsList} from '../components/applicants-list/applicants-list';

@Component({
  selector: 'app-main',
  imports: [
    Positions,
    ApplicantsList
  ],
  templateUrl: './main.html',
  standalone: true,
  styleUrl: './main.scss'
})
export class Main {

}
