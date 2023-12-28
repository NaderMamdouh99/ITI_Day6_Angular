import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServicesService } from 'src/app/services/account-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  LoginForm:FormGroup = new FormGroup({
    id:new FormControl(0),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.minLength(5),Validators.required]),
    username:new FormControl('',[Validators.minLength(3),Validators.required])
  })
  constructor(private accountServices:AccountServicesService,private router:Router){}
  get nameControl(){
    return this.LoginForm.controls['username'];
  }
  get emailControl(){
    return this.LoginForm.controls['email'];
  }
  get passwordControl(){
    return this.LoginForm.controls['password'];
  }


  Login(e:Event){

    e.preventDefault();
    if (this.emailControl.errors || this.passwordControl.errors || this.LoginForm.errors) {
      console.log('Error in Input');

    }else{
      this.accountServices.add(this.LoginForm.value).subscribe();
      this.router.navigate(['Login'])
    }
  }
}
