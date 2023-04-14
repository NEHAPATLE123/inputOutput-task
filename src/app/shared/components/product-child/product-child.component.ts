import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss']
})
export class ProductChildComponent implements OnInit {

  @Output() childMSG : EventEmitter<string> = new EventEmitter<string>()

  onmsgsend : string = "I am a good learner"

  constructor() { }

  ngOnInit(): void {
    console.log(this.onmsgsend)
  }



onClickEve(){
 this.childMSG.emit(this.onmsgsend)
}





}
