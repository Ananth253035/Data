import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  LoginForm(form:any){
    if(form.pwd=="Admin"){
    
      this.route.navigate(['emp']);
    }else{
    
      this.route.navigate(['stud']);
    }

  }

}
