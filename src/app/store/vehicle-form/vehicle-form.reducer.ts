import { createReducer, on, Action } from "@ngrx/store"
import * as VehicleFormActions from './vehicle-form.actions';

export interface VehicleFormState { 
    vehicleType: string,
    vehicleSubType: string,
    licensePlateNumber: string
}

export const initialState: VehicleFormState = {
    vehicleType: 'auto',
    vehicleSubType: 'hatchback',
    licensePlateNumber: ''
}

export const vehicleFormReducer = createReducer(
    initialState,
    on(VehicleFormActions.updateVehicleType, (state, { vehicleType }) => ({
        ...state,
        vehicleType
    })),
    on(VehicleFormActions.updateVehicleSubType, (state, { vehicleSubType }) => ({
        ...state,
        vehicleSubType
    })),
    on(VehicleFormActions.updateLicensePlate, (state, { licensePlateNumber }) => ({
        ...state,
        licensePlateNumber
    }))
);