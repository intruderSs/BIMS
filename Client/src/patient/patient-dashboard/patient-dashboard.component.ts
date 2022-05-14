import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientServiceService } from '../services/patient-service.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.sass'],
})
export class PatientDashboardComponent implements OnInit {

  isPatient = false;

  isCollapse: boolean = false;

  checkProgress: boolean = true;
  progressWarn: boolean = false;
  progressMsg: string = 'Checking User....';

  constructor(
    private router: Router,
    private patientService: PatientServiceService
  ) {}

  ngOnInit(): void {

    this.router.navigate(['patient/patient-dashboard']);
    this.checkIfPatient();
  }

  checkIfPatient() {
    this.progressWarn = false;
    this.progressMsg = 'Checking User....';
    this.patientService
      .checkIsPatient()
      .then((r) => {
        if (r) {
          this.isPatient = true;
        }
      })
      .catch((err: any) => {
        this.progressWarn = true;
        this.progressMsg = 'Only User have Access';
      });
  }

  
}
