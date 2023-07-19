import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-license-plate-form',
  templateUrl: './license-plate-form.component.html',
  styleUrls: ['./license-plate-form.component.css']
})
export class LicensePlateFormComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
