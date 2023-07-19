import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleFormModule } from './components/vehicle-form/vehicle-form.module';
import { vehicleFormReducer } from './store/vehicle-form/vehicle-form.reducer';
import { HttpClientModule } from '@angular/common/http';
import { VehicleFormEffects } from './store/vehicle-form/vehicle-form.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VehicleFormModule,
    StoreModule.forRoot({vehicleForm: vehicleFormReducer}),
    EffectsModule.forRoot([VehicleFormEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
