import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VehicleFormService } from 'src/app/services/vehicle-form.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { submitForm, submitFormError, submitFormSuccess } from './vehicle-form.actions';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { selectVehicleFormState } from './vehicle-form.selectors';

@Injectable()
export class VehicleFormEffects { 
    constructor(private actions$: Actions, private store: Store<AppState>, private vehicleFormService: VehicleFormService) {
    }

    submitForm$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(submitForm),
            withLatestFrom(this.store.select(selectVehicleFormState)),
            switchMap(([action, formState]) => from(this.vehicleFormService.submitForm(formState))),
            map(statusMessage => submitFormSuccess(statusMessage)),
            catchError(error => of(submitFormError(error)))
          )
    )
}