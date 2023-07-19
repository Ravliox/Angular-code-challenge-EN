import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { VehicleFormState } from "./vehicle-form.reducer";

export const selectVehicleForm = (state: AppState) => state.vehicleForm;
export const selectVehicleFormState = createSelector(
    selectVehicleForm,
    (state: VehicleFormState) => state
)
