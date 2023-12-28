import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServicesService } from 'src/app/services/account-services.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
LoginForm:FormGroup = new FormGroup({
  email:new FormControl('',[Validators.email,Validators.required]),
  password:new FormControl('',[Validators.minLength(5),Validators.required])
})

/* Inject Servies */
constructor(private accountServices:AccountServicesService,private router:Router){}

get emailControl(){
  return this.LoginForm.controls['email'];
}
get passwordControl(){
  return this.LoginForm.controls['password'];
}


/* Submit Form */
Login(e:Event){
  if (this.LoginForm.valid) {
    this.accountServices.login(this.emailControl.value,this.passwordControl.value);
    this.router.navigate(['/'])

  }else{
    console.log('Error in Input');
  }
}
}
