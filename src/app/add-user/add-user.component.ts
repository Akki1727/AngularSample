import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userName:string = '';
@Output()  userAdded:any = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addUserName(){

    this.userAdded.emit(this.userName);

  }

}
