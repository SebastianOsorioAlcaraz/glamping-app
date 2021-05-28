import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nocturnas',
  templateUrl: './nocturnas.component.html',
  styleUrls: ['./nocturnas.component.css']
})
export class NocturnasComponent implements OnInit {

  color = '#00ccb3';
  escondido = false;

  constructor() { }

  ngOnInit(): void {
  }

  pulsado($event: any){
    this.escondido = !this.escondido;
    console.log('Mi evento', $event);
  }

}
