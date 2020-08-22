import { Component, OnInit } from '@angular/core';
import { ALL_UNIT_TYPES } from './conversion.constants';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  public units: string[] = [
    ...ALL_UNIT_TYPES
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
