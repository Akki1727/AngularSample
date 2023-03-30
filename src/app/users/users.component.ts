import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName:string = '';
userList:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addUserName(event:any)
  {
    this.userList.push(event);
    // console.log("this.userList",this.userList)
  }

}
