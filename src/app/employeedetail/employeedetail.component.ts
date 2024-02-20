import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent {

  id:any
  employedata:any

  // https://jsonplaceholder.typicode.com/users/2/
  constructor(private route:ActivatedRoute,private http:HttpClient,private service:UserService){
    this.id=this.route.snapshot.params["id"]
    // this.http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).subscribe(data=>this.employedata=data)
    // console.log(this.id);
    this.service.retrieveEmployeedata(this.id).subscribe(data=>this.employedata=data)
    
  }

}
