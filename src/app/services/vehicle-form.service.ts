import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { VehicleFormState } from '../store/vehicle-form/vehicle-form.reducer';

@Injectable({
  providedIn: 'root'
})
export class VehicleFormService {

  constructor(private http: HttpClientModule) { }

  //simulating submitting the form to an api
  submitForm(formState: VehicleFormState) {
    let successMessage: any = {
      status: 200
    }

    console.log(formState);

    return of(successMessage);
  }
}
