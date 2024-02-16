import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  message:string=""
  constructor(){
    this.message="this is a message from parent"
  }

  recieveMessage(data:any){
    console.log(data);
    
  }

}
