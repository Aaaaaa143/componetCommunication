import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees:any

  constructor(private http:HttpClient, private service:UserService){
    // fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>this.employees=data)
    // this.http.get("https://jsonplaceholder.typicode.com/users/").subscribe(data=>this.employees=data)
    this.service.getEmployee().subscribe(data=>this.employees=data)
  }

}
