import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {
employee:any;
  constructor() { 
    this.employee=[{"id":"1","name":"Ananth","salary":"2000","gender":"Male"},{"id":"2","name":"anicf","salary":"3000","gender":"Male"},{"id":"3","name":"Dhana","salary":"200000","gender":"Female"},{"id":"4","name":"Prem","salary":"40000","gender":"Male"},{"id":"5","name":"Sai","salary":"20500","gender":"Male"}]
  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
