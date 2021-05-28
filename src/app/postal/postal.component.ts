import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postal',
  templateUrl: './postal.component.html',
  styleUrls: ['./postal.component.css']
})
export class PostalComponent implements OnInit {
  user = {name: '',
    text: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
