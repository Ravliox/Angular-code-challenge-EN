import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectVehicleFormState } from 'src/app/store/vehicle-form/vehicle-form.selectors';
import { autoSubTypeOptions, motorSubTypeOptions } from './vehicle-type.options';
import { submitForm, updateLicensePlate, updateVehicleSubType, updateVehicleType } from 'src/app/store/vehicle-form/vehicle-form.actions';
import { KentekenCheck } from 'rdw-kenteken-check';

import { Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  public formState$ = this.store.select(selectVehicleFormState);
  public formGroup: FormGroup;
  public subTypeOptions: any[];
  public imagePath: string = "";
  public submitError: boolean = false;
  private formStateSubscription$!: Subscription;
  
  constructor(private fb: FormBuilder, private store: Store<AppState>) { 
    this.formGroup = this.fb.group({
      vehicleType: this.fb.control('', [Validators.required]),
      subTypeVehicle: this.fb.control(''),
      licensePlateNumber: this.fb.control('', {validators: [Validators.required, this.validateLicensePlate()], updateOn: 'blur'})
    })

    this.subTypeOptions = autoSubTypeOptions;
  }

  ngOnInit(): void {
    this.intializeFormValue();
    this.updateTypeValue();
    this.updateSubTypeValue();
    this.updateLicensePlateValue();
  }

  ngOnDestroy() {
    this.formStateSubscription$.unsubscribe();
  }

  intializeFormValue() {
    this.formStateSubscription$ = this.formState$.pipe(take(1)).subscribe(state => {
      this.formGroup.patchValue(state);
      console.log(this.formGroup);

      this.imagePath = `./assets/${state.vehicleType}.jpg`
    })
  }

  updateTypeValue() {
    this.formGroup.get('vehicleType')?.valueChanges.subscribe(newValue => {
      let subTypeVehicleForm = this.formGroup.get('subTypeVehicle');
      subTypeVehicleForm?.setValue("");
      subTypeVehicleForm?.enable();
      subTypeVehicleForm?.addValidators(Validators.required);

      if(newValue === 'scooter') {
        this.subTypeOptions = [];
        subTypeVehicleForm?.disable();
        subTypeVehicleForm?.removeValidators(Validators.required);
      } else if (newValue === 'motor') {
        this.subTypeOptions = motorSubTypeOptions;
      } else {
        this.subTypeOptions = autoSubTypeOptions;
      }

      this.imagePath = `./assets/${newValue}.jpg`
      this.store.dispatch(updateVehicleType({ vehicleType: newValue }));
    })
  }

  updateSubTypeValue() {
    this.formGroup.get('subTypeVehicle')?.valueChanges.subscribe(newValue => {
      this.store.dispatch(updateVehicleSubType({vehicleSubType: newValue}));
    })
  }

  updateLicensePlateValue() {
    let licensePlateForm = this.formGroup.get('licensePlateNumber');
    licensePlateForm?.valueChanges.subscribe(newValue => {

        if(licensePlateForm?.valid) {
          let formatedValue = new KentekenCheck(newValue).formatLicense();
          licensePlateForm?.patchValue(formatedValue, {
            emitEvent: false,
            onlySelf: true
          });
  
          this.store.dispatch(updateLicensePlate({licensePlateNumber: formatedValue}))
        }
    })
  }


  validateLicensePlate(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      let formatCheck = new KentekenCheck(control.value);

      if (formatCheck.formatLicense() === 'XX-XX-XX') {
        return {
          formatError: true
        };
      }

      return null;
    }
  }

  submitForm() {
    this.submitError = false;

    if(!this.formGroup.valid) {
      this.submitError = true;
    } else {
      this.store.dispatch(submitForm())
    }
  } 
}
