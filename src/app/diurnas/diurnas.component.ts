import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diurnas',
  templateUrl: './diurnas.component.html',
  styleUrls: ['./diurnas.component.css']
})
export class DiurnasComponent implements OnInit {

  mensaje = 'Hola que tal?';
  color = '#00ccb3';
  escondido = false;

  constructor() { }

  ngOnInit(): void {
  }

  getMensaje(){
    return this.mensaje + 57;
  }

  pulsado($event: any){
    this.escondido = !this.escondido;
    console.log('Mi evento', $event);
  }

}
