import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  color = '#00ccb3';
  range = new FormGroup({
    llegada: new FormControl(),
    salida: new FormControl()
  });
  constructor() { }

  ngOnInit(): void {
  }

}
