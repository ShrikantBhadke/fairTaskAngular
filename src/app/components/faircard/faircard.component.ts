import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faircard',
  templateUrl: './faircard.component.html',
  styleUrls: ['./faircard.component.scss']
})
export class FaircardComponent implements OnInit {
  isActive: boolean = false
  @Input() index!: number;
  @Input() fair: any;
  @Output() fairobjemitter: EventEmitter<any> = new EventEmitter<any>()
  faCoffee = faCoffee;
  // @ViewChild('cardId').cardIdRef!:ElementRef<HTMLElement>;
  constructor() { }
  ngOnInit(): void {
    // console.log(this.fair);
  }
  getCardId(e: any) {
    console.log(e);
    // console.log(this.fair);
    this.fairobjemitter.emit(this.fair.fairId);
    this.isActive = !this.isActive;
    (e as HTMLElement).classList.remove('active')
  }
}
