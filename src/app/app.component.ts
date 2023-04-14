import { Component } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fname : string = 'Lorem ipsum dolor, sit ima aliqi. Mntium aut rerum provident, suscipit ab minima at obcaecati amet.';
  
  msgFromChilds!: string

  onMsgFromChild(e:string){
    console.log(e)
    this.msgFromChilds = e;
  }

  msgsend! :  string
  
  updateParent(e: string){
    console.log(e)
    this.msgsend = e;
  }

  onmsgsend ! : string 

  Onchild(e:string){
    console.log(e);
    this.onmsgsend = e
}
  msgInChildParent! : string

  childToParentMsg(e: any){
    console.log(e);
    this.msgInChildParent = e;
}

}
