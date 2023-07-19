import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form.component';
import { VehicleTypeFormComponent } from './vehicle-type-form/vehicle-type-form.component';
import { LicensePlateFormComponent } from './license-plate-form/license-plate-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VehicleFormComponent,
    VehicleTypeFormComponent,
    LicensePlateFormComponent
  ],
  exports: [
    VehicleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VehicleFormModule { }
