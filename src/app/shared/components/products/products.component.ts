import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  msgsend  = " I am a frontend developer"
@Output() prdouctUpdate : EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
   return this.prdouctUpdate.emit(this.msgsend)
  }
}
