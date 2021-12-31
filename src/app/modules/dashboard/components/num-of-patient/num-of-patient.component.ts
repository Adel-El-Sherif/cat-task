import { Component, Input, OnInit } from '@angular/core';
import { NumberOfPatients } from '../../models/number-of-patients/number-of-patients';

@Component({
  selector: 'num-of-patient',
  templateUrl: './num-of-patient.component.html',
  styleUrls: ['./num-of-patient.component.scss']
})
export class NumOfPatientComponent implements OnInit {

  numberOfPatients!: NumberOfPatients

  @Input() set data(data: NumberOfPatients | undefined) {
    if(data) {
      this.numberOfPatients = data;
    }
  }
  

  constructor() { }

  ngOnInit(): void {}

}
