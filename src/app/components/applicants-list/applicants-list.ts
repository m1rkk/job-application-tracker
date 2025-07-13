import {Component, OnInit, signal} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {Applicant} from '../../models/applicantModel';
@Component({
  selector: 'app-applicants-list',
  imports: [MatTableModule],
  templateUrl: './applicants-list.html',
  standalone: true,
  styleUrl: './applicants-list.scss'
})
export class ApplicantsList implements OnInit{
  applicants = signal<Array<Applicant>>([])
  displayedColumns: string[] = ['name', 'surname', 'email', 'status'];
  ngOnInit(): void {
    const applicant:Applicant ={
      name:'Mark',
      surname: 'Krustans',
      email:'mark@gmail.com',
      note: null,
      status:"Interview",
      position: 'Frontend'
    }
    this.applicants().push(applicant)
  }

}
