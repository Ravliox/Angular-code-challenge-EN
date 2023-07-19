import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { vehicleTypeOptions } from '../vehicle-type.options';


@Component({
  selector: 'app-vehicle-type-form',
  templateUrl: './vehicle-type-form.component.html',
  styleUrls: ['./vehicle-type-form.component.css']
})
export class VehicleTypeFormComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() subTypeOptions!: any[]; 

  typeOptions: any[] = [];

  constructor() {
    this.typeOptions = vehicleTypeOptions;  
  }

  ngOnInit(): void {
  }

}
