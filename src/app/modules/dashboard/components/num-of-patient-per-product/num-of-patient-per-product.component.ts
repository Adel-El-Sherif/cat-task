import { Component, Input, OnInit } from '@angular/core';
import { NumberOfPatientPerProducts } from '../../models/number-of-patient-per-products/number-of-patient-per-products';

@Component({
  selector: 'num-of-patient-per-product',
  templateUrl: './num-of-patient-per-product.component.html',
  styleUrls: ['./num-of-patient-per-product.component.scss']
})
export class NumOfPatientPerProductComponent implements OnInit {

  numberOfPatientPerProducts!: NumberOfPatientPerProducts

  @Input() set data(data: NumberOfPatientPerProducts | undefined) {
    if(data) {
      this.numberOfPatientPerProducts = data;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
