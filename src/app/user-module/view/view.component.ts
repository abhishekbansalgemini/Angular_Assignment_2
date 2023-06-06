import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserdataService } from 'src/app/services/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  userdata:any;
  constructor(private userdataservice: UserdataService, public router: Router){
    this.userdata = userdataservice.finalData; // fetching data from the service
  }

  //Condition if no form is filled yet (if we have no records then we are displaying a message)
  check_empty(){
    if(this.userdata.length === 0){
      return true;
    }
    else{
      return false;
    }
  }

  
}
