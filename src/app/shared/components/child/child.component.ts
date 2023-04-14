import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
@Input() msgFromChild! : string

msgFromChilds = "I will work hard";
@Output() getMsgFromChild : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  console.log(this.msgFromChild)
  }

  onSendMsg(){
    return this.getMsgFromChild.emit(this.msgFromChilds)
  }
}
