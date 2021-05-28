import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnInit {
  color = '#00ccb3';
  constructor() { }

  ngOnInit(): void {
  }

}
