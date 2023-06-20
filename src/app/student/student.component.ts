import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student:any;
  constructor() {
    this.student=[{"id":"1","name":"Ananth","cgpa":"72.2"}]
   }

  ngOnInit(): void {
    throw new Error ('Method not implemented.');
  }

}
