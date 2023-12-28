import { Component } from '@angular/core';
import { AccountServicesService } from 'src/app/services/account-services.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private accountServices:AccountServicesService,private rooter:Router){}


  checked():boolean{
    return this.accountServices.check;
  }

  data(){
    this.accountServices.logOut();
    this.rooter.navigate(['/'])
  }

}
