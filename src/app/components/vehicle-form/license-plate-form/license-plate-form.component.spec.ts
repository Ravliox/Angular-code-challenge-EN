import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateFormComponent } from './license-plate-form.component';

describe('LicensePlateFormComponent', () => {
  let component: LicensePlateFormComponent;
  let fixture: ComponentFixture<LicensePlateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePlateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
