import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/models/fair';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  @Input() getfair: any;
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
    console.log(this.getfair);

  }

}
