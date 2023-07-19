import { createAction, props  } from "@ngrx/store";

export const updateVehicleType = createAction(
    'Modify value of vehicle type selector', 
    props<{ vehicleType: string }>()
);

export const updateVehicleSubType = createAction(
    'Modify value of vehicle sub type selector', 
    props<{ vehicleSubType: string} >()
);

export const updateLicensePlate = createAction(
    'Modify value of license plate',
    props<{ licensePlateNumber: string }>()
);

export const submitForm = createAction('Submit valid form to API');
export const submitFormSuccess = createAction('Submit form success', props<{successMessage: any}>());
export const submitFormError = createAction('Submit Form Error', props<{errorMessage: any}>());

