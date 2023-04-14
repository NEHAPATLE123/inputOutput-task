import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.scss']
})
export class ChildParentComponent implements OnInit {

  msgInChildParent : string = "I am a quick learner"
@Output() childtoparent : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  onclickeve(){
      return this.childtoparent.emit(this.msgInChildParent)
  }

}
